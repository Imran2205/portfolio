(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s.n(a),n=s(3),i=s.n(n),o=(s(14),s.p,s(15),s(4)),c=s(5),l=s(8),d=s(6),h=s(18),x=s(7),m=s(1);var j=function(){var e=Object(a.useState)(!1),t=Object(x.a)(e,2),s=t[0],r=t[1];return Object(m.jsxs)("nav",{className:"bg-gray-800 mx-auto py-5",children:[Object(m.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(m.jsxs)("div",{className:"flex items-center justify-between h-16",children:[Object(m.jsxs)("div",{className:"flex items-center",children:[Object(m.jsx)("div",{className:"flex-shrink-0",children:Object(m.jsx)("img",{className:"h-20 w-20",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"})}),Object(m.jsx)("div",{className:"hidden md:block",children:Object(m.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[Object(m.jsx)("a",{href:"#",className:"font-sans text-base text-white hover:bg-gray-700 px-3 py-2 rounded-md transition duration-700 ease-in-out",children:"Dashboard"}),Object(m.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Team"}),Object(m.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Projects"}),Object(m.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Calendar"}),Object(m.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Reports"})]})})]}),Object(m.jsx)("div",{className:"-mr-2 flex md:hidden",children:Object(m.jsxs)("button",{onClick:function(){return r(!s)},type:"button",className:"bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",children:[Object(m.jsx)("span",{className:"sr-only",children:"Open main menu"}),s?Object(m.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):Object(m.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),Object(m.jsx)(h.a,{show:s,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:function(e){return Object(m.jsx)("div",{className:"md:hidden",id:"mobile-menu",children:Object(m.jsxs)("div",{ref:e,className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[Object(m.jsx)("a",{href:"#",className:"hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium",children:"Dashboard"}),Object(m.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Team"}),Object(m.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Projects"}),Object(m.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Calendar"}),Object(m.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Reports"})]})})}})]})},b=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleScroll=function(e){window.scrollY>100?(a.setState({isChildActive:!0}),a.setState({isNotChildActive:!1})):(a.setState({isChildActive:!1}),a.setState({isNotChildActive:!0}))},a.state={isChildActive:!1,isNotChildActive:!0},a}return Object(c.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{appear:!0,show:this.state.isNotChildActive,children:Object(m.jsx)(h.a.Child,{enter:"transition delay-500 duration-300 ease-out",enterFrom:"transform scale-y-0 -translate-y-2/4",enterTo:"transform scale-y-100 translate-y-0",leave:"delay-0 duration-0 ease-in-out",leaveFrom:"transform scale-y-100",leaveTo:"transform scale-y-100",children:Object(m.jsx)("div",{className:"w-10/12 mt-8 absolute inset-x-0 mx-auto max-w-screen-2xl z-20",children:Object(m.jsx)(j,{})})})}),Object(m.jsx)(h.a,{appear:!0,show:this.state.isChildActive,children:Object(m.jsx)(h.a.Child,{enter:"transition delay-500 duration-700 ease-in-out mx-auto fixed w-full z-20",enterFrom:"transform scale-y-0 translate-y-full",enterTo:"transform scale-y-100 translate-y-0",leave:"delay-0 duration-0 ease-in-out",leaveFrom:"transform scale-y-100",leaveTo:"transform scale-y-0",children:Object(m.jsx)("div",{className:"mx-auto fixed w-full z-10",children:Object(m.jsx)(j,{})})})})]})}}]),s}(a.Component);var u=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(b,{}),Object(m.jsx)("header",{className:"bg-white shadow",children:Object(m.jsx)("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:Object(m.jsx)("h1",{className:"font-sans text-3xl font-bold text-gray-900",children:"Dashboard"})})}),Object(m.jsx)("main",{style:{height:"2000px"},children:Object(m.jsx)("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:Object(m.jsx)("div",{className:"px-4 py-6 sm:px-0",children:Object(m.jsx)("div",{className:"border-4 border-dashed border-gray-200 rounded-lg h-96"})})})})]})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),r(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(u,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.aebc9033.chunk.js.map