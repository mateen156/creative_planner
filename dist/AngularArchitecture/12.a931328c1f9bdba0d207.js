(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{AQ2f:function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));class o{}},eOch:function(t,e,c){"use strict";c.r(e),c.d(e,"PolicyModule",(function(){return b}));var o=c("ofXK"),n=c("tyNb"),i=c("UTcu"),r=c("SbQ+"),s=c("fXoL"),a=c("Dlfb"),l=c("2prL"),u=c("ps0H");const d=[{path:"",component:(()=>{class t{constructor(t,e,c,o,n){this.router=t,this.authService=e,this.PolicyService=c,this.notifyService=o,this.activatedRoute=n,this.displayStyle="none",this.dashboardUrl="backend/dashboard",this.loginUrl="login",this.ObjPolicyDTO=new r.a,this.Currentuser=localStorage.getItem("UserfullName"),this.currentuserId=localStorage.getItem("EmpNo")}ngOnInit(){this.val=this.activatedRoute.snapshot.params.val,this.PolicyService.GetPolicyDetails(this.currentuserId).subscribe(t=>{this.PolicyId=t[0].PolicyId,this.PolicyHeader=t[0].PolicyHeader,this.PolicyContent=t[0].PolicyContent})}Agreement(t){if(1!=t)return localStorage.removeItem("EmpNo"),this.authService.logout(),this.router.navigate(["login"]);this.PolicyService.InsertUserPolicyAgreement(this.PolicyId,this.currentuserId).subscribe(t=>{this.result=t.Result,(this.result=1)?(this.notifyService.showSuccess(this.Currentuser,"Successfully logged in by : "),this.notifyService.showInfo("Accepted","User Policy"),this.router.navigate([this.dashboardUrl])):this.router.navigate([this.loginUrl])})}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(n.f),s.Wb(a.a),s.Wb(l.a),s.Wb(u.a),s.Wb(n.a))},t.\u0275cmp=s.Qb({type:t,selectors:[["app-policy"]],decls:21,vars:4,consts:[[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header",2,"background-color","#e6e6f8"],[1,"modal-title","mb-0"],["src","assets/images/logo.png"],[1,"modal-body"],[3,"innerHTML"],[1,"modal-footer",2,"background-color","#e6e6f8",3,"hidden"],[1,"row"],[1,"col-md-10"],[1,"col-md-2"],["type","button",1,"btn","btn-danger",2,"color","white",3,"click"],["type","button",1,"btn","btn-success",2,"color","white",3,"click"]],template:function(t,e){1&t&&(s.cc(0,"div"),s.cc(1,"div",0),s.cc(2,"div",1),s.cc(3,"div",2),s.cc(4,"h2",3),s.Xc(5),s.bc(),s.Xb(6,"img",4),s.bc(),s.cc(7,"div",5),s.cc(8,"div",6),s.Xc(9),s.bc(),s.bc(),s.cc(10,"div",7),s.cc(11,"div",8),s.cc(12,"div",9),s.cc(13,"p"),s.Xc(14,"I acknowledge that I have read, understand, committed, and agree to abide by The (EPS) Policy stated above and hence any violation of this policy is unethical and may constitute a criminal offense and may grounds for disciplinary action up to termination."),s.bc(),s.bc(),s.cc(15,"div",10),s.cc(16,"button",11),s.nc("click",(function(){return e.Agreement(2)})),s.Xc(17,"I Disagree"),s.bc(),s.Xc(18," \xa0 "),s.cc(19,"button",12),s.nc("click",(function(){return e.Agreement(1)})),s.Xc(20,"I Agree"),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc()),2&t&&(s.Jb(5),s.Yc(e.PolicyHeader),s.Jb(3),s.yc("innerHTML",e.PolicyContent,s.Nc),s.Jb(1),s.Zc(" ",e.PolicyContent," "),s.Jb(1),s.yc("hidden",e.val))},styles:["@media (min-width:576px){.modal-dialog[_ngcontent-%COMP%]{width:100vw;max-width:100%;margin:0}.modal-content[_ngcontent-%COMP%]{height:100vh}.modal-body[_ngcontent-%COMP%]{height:calc(100vh - 130px);overflow-y:auto}}"]}),t})(),canActivate:[i.a]}];let h=(()=>{class t{}return t.\u0275mod=s.Ub({type:t}),t.\u0275inj=s.Tb({factory:function(e){return new(e||t)},imports:[[n.i.forChild(d)],n.i]}),t})(),b=(()=>{class t{}return t.\u0275mod=s.Ub({type:t}),t.\u0275inj=s.Tb({factory:function(e){return new(e||t)},imports:[[o.c,h]]}),t})()},nqdq:function(t,e,c){"use strict";c.d(e,"a",(function(){return i}));var o=c("AytR"),n=c("fXoL");let i=(()=>{class t{constructor(){this.baseUrl=o.a.baseUrl,this.apiurl=this.baseUrl}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},ps0H:function(t,e,c){"use strict";c.d(e,"a",(function(){return i}));var o=c("fXoL"),n=c("5eHb");let i=(()=>{class t{constructor(t){this.toastr=t}showSuccess(t,e){this.toastr.success(t,e,{closeButton:!0})}showError(t,e){this.toastr.error(t,e,{closeButton:!0})}showInfo(t,e){this.toastr.info(t,e,{closeButton:!0})}showWarning(t,e){this.toastr.warning(t,e,{closeButton:!0})}}return t.\u0275fac=function(e){return new(e||t)(o.kc(n.b))},t.\u0275prov=o.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);