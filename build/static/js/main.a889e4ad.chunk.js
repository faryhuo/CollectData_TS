(this["webpackJsonpcollect-data"]=this["webpackJsonpcollect-data"]||[]).push([[0],{166:function(e,t,n){},167:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},264:function(e,t,n){},265:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},269:function(e,t,n){"use strict";n.r(t);var o,s,a,i,r,c,l,d,u,h,p,f,j,b,O,m=n(35),g=n(0),v=n.n(g),y=n(27),x=n.n(y),S=n(22),w=n(23),k=n(30),I=n(29),L=(n(166),n(73)),C=n(37),N=n(277),F=n(278),D=n(279),M=(n(167),n(7)),P=function(e){Object(k.a)(n,e);var t=Object(I.a)(n);function n(e){var o;return Object(S.a)(this,n),(o=t.call(this,e)).state={collapsed:!0},o}return Object(w.a)(n,[{key:"toggleCollapsed",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this;return Object(M.jsx)("div",{className:"Menu",style:{width:this.state.collapsed?80:256},children:Object(M.jsxs)(L.a,{defaultSelectedKeys:["1"],mode:"inline",theme:"dark",inlineCollapsed:this.state.collapsed,children:[Object(M.jsx)(L.a.Item,{icon:Object(M.jsx)(N.a,{}),children:"Generate License File"},"1"),Object(M.jsx)(C.a,{type:"primary",onClick:function(){e.toggleCollapsed()},style:{marginBottom:16},children:v.a.createElement(this.state.collapsed?F.a:D.a)})]})})}}]),n}(v.a.Component),R=(n(238),n(83)),U=n(75),K=n(272),A=n(280),E=(n(239),n(271)),z=n(32),B=n(95),T=n.n(B),H=(n(240),Object(z.b)("licenseInfoStore")(o=Object(z.c)(o=function(e){Object(k.a)(n,e);var t=Object(I.a)(n);function n(e){var o;return Object(S.a)(this,n),(o=t.call(this,e)).state={filteredInfo:null,sortedInfo:null,selectedRowKeys:[],loading:!1},o.rowSelection={selectedRowKeys:o.selectedRowKeys,onChange:function(e){o.onSelectChange(e)}},o}return Object(w.a)(n,[{key:"getSortOrder",value:function(e){var t,n=null===this||void 0===this||null===(t=this.state)||void 0===t?void 0:t.sortedInfo;if(n)return n.field===e&&n.order}},{key:"order",value:function(e,t){if(this.state.sortedInfo){var n=this.state.sortedInfo.field;return e[n]===t[n]?0:e[n]>t[n]?1:-1}}},{key:"onSelectChange",value:function(e){console.log("selectedRowKeys changed: ",e),this.setState({selectedRowKeys:e})}},{key:"remove",value:function(){var e=this,t={onOk:function(){e.props.licenseInfoStore.remove(e.state.selectedRowKeys),e.setState({selectedRowKeys:[]})}};this.props.showMessage("Do you want to delete the record?",t)}},{key:"removeAll",value:function(){var e=this,t={onOk:function(){e.props.licenseInfoStore.clear(),e.setState({selectedRowKeys:[]})}};this.props.showMessage("Do you want to delete all record?",t)}},{key:"handleChange",value:function(e,t,n){console.log("Various parameters",e,t,n),this.setState({filteredInfo:t,sortedInfo:n})}},{key:"getColumns",value:function(){var e=this;return[{title:"File Name",dataIndex:"name",key:"name",sorter:function(t,n){return e.order(t,n)},sortOrder:this.getSortOrder.call(this,"name")},{title:"Size",dataIndex:"size",render:function(e){var t=T.a.round(e/1024,2)+" kb";return Object(M.jsx)("span",{children:t})},sorter:function(t,n){return e.order(t,n)},sortOrder:this.getSortOrder.call(this,"size")},{title:"ModifiedDate",dataIndex:"modifiedDate",render:function(e){return Object(M.jsx)("span",{children:e.toDateString()})},sorter:function(t,n){return e.order(t,n)},sortOrder:this.getSortOrder.call(this,"modifiedDate")}]}},{key:"render",value:function(){var e=this,t=this.getColumns();return Object(M.jsxs)("div",{className:"HtmlTable",children:[Object(M.jsxs)("div",{className:"action-button-list",children:[Object(M.jsx)(C.a,{type:"primary",onClick:function(){e.remove()},children:"Remove"}),Object(M.jsx)(C.a,{type:"primary",onClick:function(){e.removeAll()},children:"Remove All"})]}),Object(M.jsx)(E.a,{onChange:function(t,n,o){e.handleChange(t,n,o)},rowSelection:this.rowSelection,size:"small",bordered:!0,columns:t,dataSource:Object(R.a)(this.props.licenseInfoStore.htmlFileDataSource)})]})}}]),n}(v.a.Component))||o)||o),J=n(72),V=n.n(J),G=K.a.Dragger,_=Object(z.b)((function(e){return{licenseInfoStore:e.licenseInfoStore,homePageStore:e.homePageStore}}))(s=Object(z.c)(s=function(e){Object(k.a)(n,e);var t=Object(I.a)(n);function n(e){var o;Object(S.a)(this,n),o=t.call(this,e);var s=Object(U.a)(o);return o.state={multiple:!0,name:"files",showUploadList:!1,fileList:o.props.licenseInfoStore.fileList,fileMap:o.props.licenseInfoStore.fileMap,action:"",uploading:!1,beforeUpload:function(e){var t=s.state.fileMap;return t[e.name]?t[e.name].lastModifiedDate<e.lastModifiedDate&&(t[e.name]=e,s.setState({fileMap:t})):(t[e.name]=e,s.setState({fileMap:t})),s.props.licenseInfoStore.addFile(e),s.setState((function(t){return{fileList:[].concat(Object(R.a)(t.fileList),[e])}})),!1}},o}return Object(w.a)(n,[{key:"submit",value:function(){this.props.homePageStore.showLoading();var e=this,t=new FormData,n=this.props.licenseInfoStore;if(0===n.fileList.length)return this.props.homePageStore.closeLoading(),void this.props.showMessage("Please confrim if upload the excel file and html file.");for(var o in n.fileList){var s=n.fileList[o];t.append("files",s)}V()({url:"/api/checkLicenseFile",method:"post",processData:!1,data:t}).then((function(t){console.log(t),e.props.homePageStore.closeLoading(),0===t.data.status&&(n.licenseInfoList=t.data.data,e.props.nextStep(1))})).catch((function(t){console.log(t);e.props.showMessage("Has internal server error, please check the log file."),e.props.homePageStore.closeLoading()}))}},{key:"render",value:function(){var e=this;return Object(M.jsxs)("div",{className:"CollectData",children:[Object(M.jsx)("div",{style:{textAlign:"center"},children:Object(M.jsx)("h2",{children:"Upload the license information file (html file)"})}),Object(M.jsx)("div",{className:"upload-control",children:Object(M.jsxs)(G,Object(m.a)(Object(m.a)({},this.state),{},{accept:".htm,.html",children:[Object(M.jsx)("p",{className:"ant-upload-drag-icon",children:Object(M.jsx)(A.a,{})}),Object(M.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),Object(M.jsx)("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"})]}))}),Object(M.jsx)("div",{className:"data-list",children:Object(M.jsx)(H,{showMessage:this.props.showMessage})}),Object(M.jsx)("div",{className:"action-button",children:Object(M.jsx)(C.a,{disabled:!(this.state.fileList.length>0),type:"primary",onClick:function(){e.submit()},children:"Next"})})]})}}]),n}(v.a.Component))||s)||s,q=n(273),Q=n(276),W=(n(264),K.a.Dragger),X=Object(z.b)((function(e){return{licenseInfoStore:e.licenseInfoStore,homePageStore:e.homePageStore}}))(a=Object(z.c)(a=function(e){Object(k.a)(n,e);var t=Object(I.a)(n);function n(e){var o;Object(S.a)(this,n),o=t.call(this,e),V.a.defaults.timeout=3e7;var s=Object(U.a)(o);return o.state={multiple:!1,enableNext:o.props.licenseInfoStore.validExcelFile,name:"excelFile",showUploadList:{showDownloadIcon:!1,showRemoveIcon:!1},errorMessage:"",fileList:[],excelFile:o.props.licenseInfoStore.excelFile,action:"",uploading:!1,beforeUpload:function(e){return s.setState((function(t){return{excelFile:e,fileList:[e]}}),(function(){s.props.licenseInfoStore.excelFile=e,console.log(s.props.licenseInfoStore),s.handleUpload()})),!1}},o.props.licenseInfoStore.excelFile&&o.props.licenseInfoStore.validExcelFile&&o.state.fileList.push(o.props.licenseInfoStore.excelFile),o}return Object(w.a)(n,[{key:"destroyAll",value:function(){q.a.destroyAll()}},{key:"handleUpload",value:function(){var e=this,t=new FormData;t.append("excelFile",this.state.excelFile),V()({url:"/api/checkExcelFile",method:"post",processData:!1,data:t,responseType:"json"}).then((function(t){if(console.log(t),200===t.status&&0===t.data.status)e.setState({enableNext:!0,errorMessage:""},(function(){e.props.licenseInfoStore.validExcelFile=!0}));else if(e.setState({enableNext:!1},(function(){e.props.licenseInfoStore.validExcelFile=!1})),t.data.message){var n=Object(M.jsx)("pre",{children:t.data.message});e.setState({errorMessage:n})}})).catch((function(t){console.log(t),e.setState({enableNext:!1,errorMessage:"Has internal server error, please check the log file."},(function(){e.props.licenseInfoStore.validExcelFile=!1}))}))}},{key:"downloadFile",value:function(){var e=this.props.licenseInfoStore,t=this;V()({url:"/api/downloadFile",method:"post",processData:!1,responseType:"blob"}).then((function(n){var o=n.data,s=new Blob([o]),a=e.fileName;if("download"in document.createElement("a")){var i=document.createElement("a");i.download=a,i.style.display="none",i.href=URL.createObjectURL(s),document.body.appendChild(i),i.click(),URL.revokeObjectURL(i.href),document.body.removeChild(i)}else navigator.msSaveBlob(s,a);t.props.homePageStore.closeLoading()})).catch((function(e){console.log(e),t.props.homePageStore.closeLoading()}))}},{key:"submit",value:function(){this.props.homePageStore.showLoading();var e=this,t=new FormData,n=this.props.licenseInfoStore;if(0===n.licenseInfoList.length||!n.excelFile)return this.props.homePageStore.closeLoading(),void this.props.showMessage("Please confrim if upload the excel file and html file.");var o=[];for(var s in n.licenseInfoList){var a=n.licenseInfoList[s];o.push(a)}t.append("computerInfoListStr",JSON.stringify(o)),t.append("excelFile",n.excelFile),V()({url:"/api/download",method:"post",processData:!1,data:t}).then((function(t){console.log(t),e.downloadFile(),e.props.nextStep(3)})).catch((function(t){console.log(t);e.props.showMessage("Has internal server error, please check the log file."),e.props.homePageStore.closeLoading()}))}},{key:"uploadExcel",value:function(e){if(console.log(e),this.state.UploadBtn.files.length){var t=this.state.UploadBtn.files[0];this.setState({excelFile:t,excelName:t.name})}}},{key:"render",value:function(){var e=this;return Object(M.jsxs)("div",{className:"ExcelUploadPage",children:[Object(M.jsxs)("form",{action:"/",method:"post",onSubmit:function(e){console.log(e)},children:[Object(M.jsx)("div",{style:{textAlign:"center"},children:Object(M.jsx)("h2",{children:"Upload the excel file"})}),Object(M.jsx)("div",{children:Object(M.jsxs)(W,Object(m.a)(Object(m.a)({},this.state),{},{accept:".xls,.xlsx",children:[Object(M.jsx)("p",{className:"ant-upload-drag-icon",children:Object(M.jsx)(A.a,{})}),Object(M.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),Object(M.jsx)("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"})]}))})]}),Object(M.jsx)("div",{children:this.state.errorMessage&&Object(M.jsx)(Q.a,{message:this.state.errorMessage,type:"error"})}),Object(M.jsx)("div",{className:"action-button",children:Object(M.jsx)(C.a,{disabled:!this.state.enableNext,type:"primary",onClick:function(){e.submit()},children:"Next"})})]})}}]),n}(v.a.Component))||a)||a,Y=(n(265),n(274)),Z=function(e){Object(k.a)(n,e);var t=Object(I.a)(n);function n(e){var o;return Object(S.a)(this,n),(o=t.call(this,e)).state={},o}return Object(w.a)(n,[{key:"render",value:function(){return Object(M.jsx)("div",{className:"FinishPage",children:Object(M.jsx)(Y.a,{status:"success",title:"Successfully upload license information file. Please check the excel if can be download!",subTitle:"Download file need takes 1-5 minutes, please wait."})})}}]),n}(v.a.Component),$=(n(266),Object(z.b)("licenseInfoStore")(i=Object(z.c)(i=function(e){Object(k.a)(n,e);var t=Object(I.a)(n);function n(e){var o;return Object(S.a)(this,n),(o=t.call(this,e)).state={filteredInfo:null,sortedInfo:{field:"convert",order:"ascend"},selectedRowKeys:[],loading:!1},o.rowSelection={selectedRowKeys:o.selectedRowKeys,onChange:function(e){o.onSelectChange(e)}},o}return Object(w.a)(n,[{key:"getSortOrder",value:function(e){var t,n=null===this||void 0===this||null===(t=this.state)||void 0===t?void 0:t.sortedInfo;if(n)return n.field===e&&n.order}},{key:"order",value:function(e,t){if(this.state.sortedInfo){var n=this.state.sortedInfo.field;return e[n]===t[n]?0:e[n]>t[n]?1:-1}}},{key:"onSelectChange",value:function(e){console.log("selectedRowKeys changed: ",e),this.setState({selectedRowKeys:e})}},{key:"remove",value:function(){var e=this,t={onOk:function(){e.props.licenseInfoStore.removeLicenseInfo(e.state.selectedRowKeys),e.setState({selectedRowKeys:[]})}};this.props.showMessage("Do you want to deleted the record?",t)}},{key:"handleChange",value:function(e,t,n){console.log("Various parameters",e,t,n),this.setState({filteredInfo:t,sortedInfo:n})}},{key:"getColumns",value:function(){var e=this;return[{title:"File Name",dataIndex:"fileName",key:"fileName",sorter:function(t,n){return e.order(t,n)},sortOrder:this.getSortOrder.call(this,"fileName")},{title:"Machine Name",dataIndex:"computerName",sorter:function(t,n){return e.order(t,n)},sortOrder:this.getSortOrder.call(this,"computerName")},{title:"User",dataIndex:"windowLogon",sorter:function(t,n){return e.order(t,n)},sortOrder:this.getSortOrder.call(this,"windowLogon")},{title:"Status",dataIndex:"convert",sorter:function(t,n){return e.order(t,n)},render:function(e){return Object(M.jsx)("div",{children:e?Object(M.jsx)(Q.a,{type:"success",message:"Success",banner:!0}):Object(M.jsx)(Q.a,{type:"error",message:"Error",banner:!0})})},sortOrder:this.getSortOrder.call(this,"convert")},{title:"Message",dataIndex:"message",render:function(e){return Object(M.jsx)("pre",{children:e})},sorter:function(t,n){return e.order(t,n)},sortOrder:this.getSortOrder.call(this,"message")}]}},{key:"render",value:function(){var e=this,t=this.getColumns();return Object(M.jsxs)("div",{className:"LicenseTable",children:[Object(M.jsx)("div",{className:"action-button-list",children:Object(M.jsx)(C.a,{disabled:!this.props.licenseInfoStore.licenseInfoDataSource.length,type:"primary",onClick:function(){e.remove()},children:"Remove"})}),Object(M.jsx)(E.a,{onChange:function(t,n,o){e.handleChange(t,n,o)},rowSelection:this.rowSelection,size:"small",bordered:!0,columns:t,dataSource:Object(R.a)(this.props.licenseInfoStore.licenseInfoDataSource)})]})}}]),n}(v.a.Component))||i)||i),ee=(n(267),function(e){Object(k.a)(n,e);var t=Object(I.a)(n);function n(e){var o;return Object(S.a)(this,n),(o=t.call(this,e)).state={dataSource:[]},o}return Object(w.a)(n,[{key:"render",value:function(){var e=this;return Object(M.jsxs)("div",{className:"ConfirmPage",children:[Object(M.jsx)("div",{children:Object(M.jsx)("h1",{children:"Confrim need upload file"})}),Object(M.jsx)("div",{className:"data-list",children:Object(M.jsx)($,{showMessage:this.props.showMessage})}),Object(M.jsx)("div",{className:"action-button",children:Object(M.jsx)(C.a,{type:"primary",onClick:function(){e.props.nextStep()},children:"Next"})})]})}}]),n}(v.a.Component)),te=n(275),ne=te.a.Step,oe=function(e){Object(k.a)(n,e);var t=Object(I.a)(n);function n(e){var o;return Object(S.a)(this,n),(o=t.call(this,e)).state={current:0,maxCurrent:0},o}return Object(w.a)(n,[{key:"nextStep",value:function(e){this.setState({current:e,maxCurrent:e})}},{key:"onChange",value:function(e){e<=this.state.maxCurrent&&e!==this.state.current&&this.setState({current:e})}},{key:"getPageBycurrent",value:function(){var e=this,t={showMessage:this.props.showMessage};switch(this.state.current){case 0:return Object(M.jsx)(_,Object(m.a)(Object(m.a)({},t),{},{nextStep:function(){return e.nextStep(1)}}));case 1:return Object(M.jsx)(ee,Object(m.a)(Object(m.a)({},t),{},{nextStep:function(){return e.nextStep(2)}}));case 2:return Object(M.jsx)(X,Object(m.a)(Object(m.a)({},t),{},{nextStep:function(){return e.nextStep(3)}}));case 3:return Object(M.jsx)(Z,{})}}},{key:"getStepStatus",value:function(e){return e<this.state.maxCurrent?"finish":e===this.state.maxCurrent?"process":"wait"}},{key:"render",value:function(){var e=this;return Object(M.jsxs)("div",{className:"MainPage",children:[Object(M.jsx)("div",{className:"step-content",children:this.getPageBycurrent()}),Object(M.jsx)("div",{className:"step-wrapper",children:Object(M.jsxs)(te.a,{type:"navigation",current:this.state.current,onChange:function(t){e.onChange(t)},className:"site-navigation-steps",children:[Object(M.jsx)(ne,{status:this.getStepStatus(0),title:"Upload license file"}),Object(M.jsx)(ne,{status:this.getStepStatus(1),title:"Confirm license file"}),Object(M.jsx)(ne,{status:this.getStepStatus(2),title:"Upload excel file"}),Object(M.jsx)(ne,{status:this.getStepStatus(3),title:"Done"})]})})]})}}]),n}(v.a.Component),se=n(152),ae=n(71),ie=(n(268),Object(z.b)("homePageStore")(r=Object(z.c)(r=function(e){Object(k.a)(n,e);var t=Object(I.a)(n);function n(e){var o;return Object(S.a)(this,n),(o=t.call(this,e)).state={},o}return Object(w.a)(n,[{key:"destroyAll",value:function(){q.a.destroyAll()}},{key:"showMessage",value:function(e,t){var n=q.a.confirm,o=this,s={icon:Object(M.jsx)(ae.a,{}),content:Object(M.jsx)("div",{children:e}),onOk:function(){o.destroyAll()},onCancel:function(){o.destroyAll()}};t&&(t.onOk&&(s.onOk=function(){t.onOk(),o.destroyAll()}),t.onCancel&&(s.onCancel=function(){t.onCancel(),o.destroyAll()})),n(s)}},{key:"render",value:function(){var e=this;return Object(M.jsxs)("div",{className:"HomePage",children:[Object(M.jsx)("div",{className:"menu-wrapper",children:Object(M.jsx)(P,{})}),Object(M.jsx)("div",{className:"contain-wrapper",children:Object(M.jsx)(oe,{showMessage:function(t,n){e.showMessage(t,n)}})}),this.props.homePageStore.loading&&Object(M.jsx)("div",{className:"loading",children:Object(M.jsx)(se.a,{size:"large",tip:"Loading..."})})]})}}]),n}(v.a.Component))||r)||r),re=Object(z.c)(c=function(e){Object(k.a)(n,e);var t=Object(I.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(M.jsx)("div",{id:"App_Conponent",className:"Application",children:Object(M.jsx)(ie,{})})}}]),n}(v.a.Component))||c,ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,281)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),s(e),a(e),i(e)}))},le=n(96),de=n(43),ue=(n(148),n(13)),he={homePageStore:new(l=function(){function e(){Object(S.a)(this,e),Object(le.a)(this,"loading",d,this),Object(ue.n)(this)}return Object(w.a)(e,[{key:"showLoading",value:function(){this.loading=!0}},{key:"closeLoading",value:function(){this.loading=!1}}]),e}(),d=Object(de.a)(l.prototype,"loading",[ue.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(de.a)(l.prototype,"showLoading",[ue.f],Object.getOwnPropertyDescriptor(l.prototype,"showLoading"),l.prototype),Object(de.a)(l.prototype,"closeLoading",[ue.f],Object.getOwnPropertyDescriptor(l.prototype,"closeLoading"),l.prototype),l),licenseInfoStore:new(u=ue.f.bound,h=ue.f.bound,p=ue.f.bound,f=ue.f.bound,j=function(){function e(){Object(S.a)(this,e),Object(le.a)(this,"fileList",b,this),this.key=0,Object(le.a)(this,"licenseInfoList",O,this),this.fileMap={},this.excelFile=void 0,this.fileName="Company Software License.xlsx",this.validExcelFile=!1,Object(ue.n)(this,{fileList:ue.o,licenseInfoList:ue.o,addFile:ue.f.bound,clear:ue.f.bound,remove:ue.f.bound,htmlFileDataSource:ue.g,licenseInfoDataSource:ue.g,removeLicenseInfo:ue.f.bound})}return Object(w.a)(e,[{key:"licenseInfoDataSource",get:function(){for(var e=[],t=0;t<this.licenseInfoList.length;t++){var n=this.licenseInfoList[t];null!==n.key&&void 0!==n.key||(n.key=t),e.push(n)}return e}},{key:"htmlFileDataSource",get:function(){for(var e=[],t=0;t<this.fileList.length;t++){var n=this.fileList[t],o={};o.modifiedDate=n.lastModifiedDate,o.size=n.size,o.name=n.name,o.file=n,o.key=n.key,e.push(o)}return e}},{key:"addFile",value:function(e){this.key++,e.key=this.key,this.fileList.push(e)}},{key:"remove",value:function(e){for(var t=this.fileList.length-1;t>=0;t--){var n=this.fileList[t];T.a.indexOf(e,n.key)>=0&&this.fileList.remove(n)}}},{key:"removeLicenseInfo",value:function(e){for(var t=this.licenseInfoList.length-1;t>=0;t--){var n=this.licenseInfoList[t];T.a.indexOf(e,n.key)>=0&&this.licenseInfoList.remove(n)}}},{key:"clear",value:function(e){this.fileList.clear()}}]),e}(),b=Object(de.a)(j.prototype,"fileList",[ue.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),O=Object(de.a)(j.prototype,"licenseInfoList",[ue.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(de.a)(j.prototype,"licenseInfoDataSource",[ue.g],Object.getOwnPropertyDescriptor(j.prototype,"licenseInfoDataSource"),j.prototype),Object(de.a)(j.prototype,"htmlFileDataSource",[ue.g],Object.getOwnPropertyDescriptor(j.prototype,"htmlFileDataSource"),j.prototype),Object(de.a)(j.prototype,"addFile",[u],Object.getOwnPropertyDescriptor(j.prototype,"addFile"),j.prototype),Object(de.a)(j.prototype,"remove",[h],Object.getOwnPropertyDescriptor(j.prototype,"remove"),j.prototype),Object(de.a)(j.prototype,"removeLicenseInfo",[p],Object.getOwnPropertyDescriptor(j.prototype,"removeLicenseInfo"),j.prototype),Object(de.a)(j.prototype,"clear",[f],Object.getOwnPropertyDescriptor(j.prototype,"clear"),j.prototype),j)};x.a.render(Object(M.jsx)(v.a.StrictMode,{children:Object(M.jsx)(z.a,Object(m.a)(Object(m.a)({},he),{},{children:Object(M.jsx)(re,{})}))}),document.getElementById("app")),ce()}},[[269,1,2]]]);
//# sourceMappingURL=main.a889e4ad.chunk.js.map