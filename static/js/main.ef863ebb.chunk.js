(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=(n(33),n(34),n(35),n(4)),o=n.n(i),c=n(8),l=n(14),u=n(30),s=n(3),p=n(2),f=n(6),d=n(5),h=n(7),m=(n(37),n(38),n(23)),v=n.n(m),b=function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"editor-header"},a.a.createElement("div",{className:"mobile-menu-toggle-trigger"},a.a.createElement("img",{src:v.a,onClick:this.props.onMobileMenuToggled})),a.a.createElement("div",{style:{flexGrow:1}},"simonedegiacomi.dev"))}}]),t}(r.Component),O=(n(39),function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.currentFile;return a.a.createElement("div",{className:"editor-footer"},a.a.createElement("div",null,e&&e.getPath()))}}]),t}(r.Component)),F=function(){function e(t,n){Object(s.a)(this,e),this.container=t,this.name=n}return Object(p.a)(e,[{key:"getPath",value:function(){return this.container.getPath()+this.name}}]),e}(),g=function(){function e(t,n){Object(s.a)(this,e),this.parentFolder=t,this.name=n,this.content=[]}return Object(p.a)(e,null,[{key:"createRoot",value:function(){return new e(null,"")}}]),Object(p.a)(e,[{key:"isRoot",value:function(){return null===this.parentFolder}},{key:"add",value:function(e){this.content.push(e)}},{key:"getPath",value:function(){return this.isRoot()?"/":"".concat(this.parentFolder.getPath()).concat(this.name,"/")}},{key:"getFileOrNull",value:function(e){console.log("searching",e);var t=e.split("/");if(t[0]!==this.name)return null;t.splice(0,1);var n=!0,r=!1,a=void 0;try{for(var i,o=this.content[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var c=i.value;if(c.name===t[0])return c instanceof F?c:c.getFileOrNull(t.join("/"))}}catch(l){r=!0,a=l}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return null}}]),e}(),y="".concat("/pages","/index.json"),j={getRoot:function(){var e=Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(y);case 2:return t=e.sent,e.abrupt("return",k(t));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getFileContent:function(){var e=Object(c.a)(o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("/pages").concat(t.getPath()),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.text();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},w=function(){var e=Object(c.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=g.createRoot();return E(t,e),t},E=function e(t,n){n.forEach(function(n){if("file"===n.type)t.add(new F(t,n.name));else{var r=new g(t,n.name);e(r,n.content),t.add(r)}})},C=(n(40),n(24)),x=n.n(C),N=n(25),M=n.n(N),S=(n(41),function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).onOpenFile=function(e){e.stopPropagation(),n.props.onOpenFile(n.props.file)},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.file;return a.a.createElement("span",{onClick:this.onOpenFile,className:"file-icon-and-name"},a.a.createElement("img",{alt:"file icon",src:M.a,className:"file-icon"}),e.name)}}]),t}(r.Component)),P=(n(42),n(26)),R=n.n(P),U=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={expanded:!0},n.handleClick=function(e){e.stopPropagation(),n.props.folder.isRoot()||n.setState(function(e,t){return{expanded:!e.expanded}})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.folder,t=this.state.expanded;return a.a.createElement("div",{onClick:this.handleClick,className:x()({folder:!0,expanded:t})},a.a.createElement("div",{className:"folder-name-and-toggler"},!e.isRoot()&&a.a.createElement("img",{alt:"folder icon",src:R.a,className:"folder-toggler"}),e.name),this.renderChildren())}},{key:"renderChildren",value:function(){var e=this,t=this.props.folder;return a.a.createElement("ul",null,t.content.map(function(t){return a.a.createElement("li",{key:t.getPath()},e.renderFileOrFolder(t))}))}},{key:"renderFileOrFolder",value:function(e){var n=this.props.onOpenFile;return e instanceof F?a.a.createElement(S,{file:e,onOpenFile:n}):e instanceof g?a.a.createElement(t,{folder:e,onOpenFile:n}):a.a.createElement("p",null,"Unknown item type")}}]),t}(r.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.root,n=e.onOpenFile;return a.a.createElement("div",{className:this.getClasses()},!t&&a.a.createElement("p",null,"Please wait"),t&&a.a.createElement(U,{folder:t,onOpenFile:n}))}},{key:"getClasses",value:function(){var e="file-explorer-sidebar ";return this.props.mobileMenuOpen&&(e+="mobile-menu-open"),e}}]),t}(r.Component),W=(n(43),n(27)),D=n.n(W),I=function(e){var t=e.file,n=e.onSelectFile,r=e.onCloseFile,i=e.isCurrent;return a.a.createElement("div",{className:"tab ".concat(i?"current-tab":""),onClick:n},t.name,a.a.createElement("div",{onClick:function(e){e.stopPropagation(),r()}},a.a.createElement("img",{alt:"close tab",src:D.a})))},T=(n(44),function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.openedFiles,n=e.currentFile,r=e.onOpenFile,i=e.onCloseFile;return a.a.createElement("div",{className:"tabs-container"},t.map(function(e){return a.a.createElement(I,{key:e.name,file:e,isCurrent:e===n,onSelectFile:function(){return r(e)},onCloseFile:function(){return i(e)}})}))}}]),t}(r.Component)),B=n(28),J=n.n(B),_=n(13),G=n.n(_),H=(n(101),n(102),n(29)),L=n.n(H),$=(n(103),function(){return a.a.createElement("div",{className:"open-from-sidebar"},a.a.createElement("img",{alt:"arrow pointing sidebar",src:L.a}),a.a.createElement("p",null,"Open a file from the left"))}),q=(n(104),function(){return a.a.createElement("div",{className:"loading-content"},a.a.createElement("div",{className:"loading-content-spinner-container"},a.a.createElement("div",{className:"spinner-border loading-content-spinner",role:"status"})),"Downloading ...")}),z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).markdownRenderer=new J.a({html:!0}).use(G.a,"history-list").use(G.a,"history-list-item-multiple-paragraphs"),n.state={content:null},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(c.a)(o.a.mark(function e(t,n,r){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.currentFile!==t.currentFile){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.downloadFileContent();case 4:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"downloadFileContent",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({content:null}),null!=(t=this.props.currentFile)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,j.getFileContent(t);case 6:n=e.sent,this.setState({content:n});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.currentFile?this.state.content?this.renderFileContent():a.a.createElement(q,null):a.a.createElement($,null)}},{key:"renderFileContent",value:function(){if(this.state.content){var e=this.markdownRenderer.render(this.state.content);return a.a.createElement("div",{className:"file-viewer"},a.a.createElement("div",{className:"container file-content-container",dangerouslySetInnerHTML:{__html:e}}))}}}]),t}(r.Component),K=(n(105),function(e){var t=e.root,n=e.openedFiles,r=e.currentFile,i=e.onOpenFile,o=e.onCloseFile,c=e.mobileMenuOpen;return a.a.createElement("div",{className:"editor-body"},a.a.createElement(A,{root:t,currentFile:r,onOpenFile:i,mobileMenuOpen:c}),a.a.createElement("div",{className:"editor-center"},a.a.createElement(T,{currentFile:r,openedFiles:n,onOpenFile:i,onCloseFile:o}),a.a.createElement(z,{currentFile:r})))}),Q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={root:null,openedFiles:[],currentFile:null,mobileMenuOpen:!1},n.handleMobileMenuToggled=function(){n.setState(function(e){return{mobileMenuOpen:!e.mobileMenuOpen}})},n.handleOpenFile=function(e){return n.setState(function(t){var r;return r=n.isFileAlreadyOpenInState(t,e)?n.getStateUpdateWithFileAsCurrent(e):n.getStateUpdateWithNewOpenFile(t,e),n.updateUrlWithCurrentFile(r.currentFile),Object(u.a)({},r,{mobileMenuOpen:!1})})},n.isFileAlreadyOpenInState=function(e,t){return e.openedFiles.indexOf(t)>=0},n.getStateUpdateWithFileAsCurrent=function(e){return{currentFile:e}},n.getStateUpdateWithNewOpenFile=function(e,t){return{openedFiles:[].concat(Object(l.a)(e.openedFiles),[t]),currentFile:t}},n.updateUrlWithCurrentFile=function(e){history.pushState({},e.name,e.getPath())},n.handleCloseFile=function(e){return n.setState(function(t){var r=n.getFileArrayWithoutFile(t.openedFiles,e);return{openedFiles:r,currentFile:t.currentFile===e?r[r.length-1]:t.currentFile}})},n.getFileArrayWithoutFile=function(e,t){var n=Object(l.a)(e);return n.splice(n.indexOf(t),1),n},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchRoot();case 2:t=e.sent,this.setState({root:t}),this.openFileFromUrlOrDefault(t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchRoot",value:function(){var e=Object(c.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.getRoot();case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},{key:"openFileFromUrlOrDefault",value:function(e){var t=this.getFilePathFromUrlOrDefault(),n=e.getFileOrNull(decodeURI(t));null!=n&&n instanceof F&&this.handleOpenFile(n)}},{key:"getFilePathFromUrlOrDefault",value:function(){var e=location.pathname;return"/"===e?"/About me.md":e}},{key:"render",value:function(){var e=this.state,t=e.mobileMenuOpen,n=e.currentFile;return a.a.createElement("div",{className:"editor"},a.a.createElement(b,{onMobileMenuToggled:this.handleMobileMenuToggled,mobileMenuOpen:t}),a.a.createElement(K,Object.assign({},this.state,{onOpenFile:this.handleOpenFile,onCloseFile:this.handleCloseFile,mobileMenuOpen:t})),a.a.createElement(O,{currentFile:n}))}}]),t}(r.Component),V=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));(0,n(106).render)(a.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,t,n){e.exports=n.p+"static/media/mobile-menu.29715c20.svg"},25:function(e,t,n){e.exports=n.p+"static/media/file.bc7dabe1.svg"},26:function(e,t,n){e.exports=n.p+"static/media/folder-arrow.4a58a7fb.svg"},27:function(e,t,n){e.exports=n.p+"static/media/close.b77a1b38.svg"},29:function(e,t,n){e.exports=n.p+"static/media/arrow-left.77ee5615.svg"},31:function(e,t,n){e.exports=n(113)},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){}},[[31,1,2]]]);
//# sourceMappingURL=main.ef863ebb.chunk.js.map