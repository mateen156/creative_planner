(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{AQ2f:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));class s{}},Bl5f:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));class s{}},Eu0l:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));class s{}},T8uj:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));class s{}},Tkif:function(t,e,o){"use strict";o.r(e),o.d(e,"LoginModule",(function(){return g}));var s=o("ofXK"),r=o("3Pt+"),i=o("tyNb"),a=o("dh0H"),c=o("fXoL"),l=o("ps0H"),n=o("Dlfb"),h=o("tHiJ"),b=o("lPP5");function p(t,e){1&t&&(c.cc(0,"div",36),c.cc(1,"b"),c.Xc(2,"UserName is required !"),c.bc(),c.bc())}function d(t,e){if(1&t&&(c.cc(0,"div",34),c.Vc(1,p,3,0,"div",35),c.bc()),2&t){const t=c.rc();c.Jb(1),c.yc("ngIf",t.f.userid.errors.required)}}function u(t,e){1&t&&(c.cc(0,"p",37),c.cc(1,"strong"),c.Xc(2,"In Correct UserName"),c.bc(),c.bc())}function m(t,e){1&t&&(c.cc(0,"div",36),c.cc(1,"b"),c.Xc(2,"Password is required !"),c.bc(),c.bc())}function j(t,e){if(1&t&&(c.cc(0,"div",34),c.Vc(1,m,3,0,"div",35),c.bc()),2&t){const t=c.rc();c.Jb(1),c.yc("ngIf",t.f.password.errors.required)}}function D(t,e){if(1&t&&(c.cc(0,"p",37),c.cc(1,"strong"),c.Xc(2),c.bc(),c.bc()),2&t){const t=c.rc();c.Jb(2),c.Yc(t.message)}}const O=function(t){return{"has-error":t}},_=[{path:"",component:(()=>{class t{constructor(t,e,o,s,i,c,l){this.formBuilder=t,this.router=e,this.notifyService=o,this.cd=s,this.authService=i,this.service=c,this.loadingBar=l,this.submitted=!1,this.isLoading=!1,this.InValidPassword=!1,this.InValidUserName=!1,this.dashboardUrl="backend/dashboard",this.policyUrl="userpolicy",this.cosnt_Loadingbar=this.loadingBar.useRef("http"),this.Obj_ILoginDTO=new a.a,this.loginForm=this.formBuilder.group({userid:["",r.v.required],password:["",r.v.required]})}ngOnInit(){this.authService.logout()}get f(){return this.loginForm.controls}OnKeyPress(){this.InValidPassword=!1,this.InValidUserName=!1,this.message=""}login(){this.submitted=!0,this.loginForm.invalid||(this.Obj_ILoginDTO.UserName=this.f.userid.value,this.Obj_ILoginDTO.Password=this.f.password.value,this.service.LoginCredentials(this.Obj_ILoginDTO).subscribe(t=>{this.UserDetails_List=t,this.message=this.UserDetails_List[0].Message,this.DB_username=this.UserDetails_List[0].UserName.toLowerCase(),this.DB_password=this.UserDetails_List[0].Password,this.User_FullName=this.UserDetails_List[0].TM_DisplayName,this.IsPolicy=this.UserDetails_List[0].IsPolicy,this.f.userid.value.toLowerCase()==this.DB_username&&this.f.password.value==this.DB_password?(localStorage.setItem("isLoggedIn","true"),this.InValidPassword=!1,this.cd.detectChanges(),this.EmpNo=t[0].Emp_No,localStorage.setItem("EmpNo",this.EmpNo),this.EmpCompNo=t[0].Emp_Comp_No.replace(/\s/g,""),this.SystemRole=t[0].Emp_SystemRole,this.OrganizationId=t[0].OrganizationId,sessionStorage.setItem("Emp_Email",t[0].Emp_Email),sessionStorage.setItem("Session_EmpNo",this.EmpNo),sessionStorage.setItem("EmpCompNo",this.EmpCompNo),localStorage.setItem("UserfullName",this.User_FullName),localStorage.setItem("_Currentuser",this.DB_username),localStorage.setItem("OrganizationId",this.OrganizationId),1==this.IsPolicy?(this.router.navigate([this.dashboardUrl]),this.notifyService.showInfo(this.User_FullName+"  ","Login By :"),this.notifyService.showSuccess("Successfully","Logged In"),this.InValidPassword=!1,this.cd.detectChanges()):0==this.IsPolicy&&(this.router.navigate([this.policyUrl]),this.InValidPassword=!1,this.cd.detectChanges())):(this.InValidPassword=!0,console.log("Invalid Login"),this.authService.logout(),localStorage.removeItem("EmpNo"),this.cd.detectChanges())}))}}return t.\u0275fac=function(e){return new(e||t)(c.Wb(r.e),c.Wb(i.f),c.Wb(l.a),c.Wb(c.i),c.Wb(n.a),c.Wb(h.a),c.Wb(b.c))},t.\u0275cmp=c.Qb({type:t,selectors:[["app-login"]],decls:46,vars:11,consts:[[1,"kt-grid","kt-grid--ver","kt-grid--root","kt-page"],["id","kt_login",1,"kt-grid","kt-grid--hor","kt-grid--root","kt-login","kt-login--v6","kt-login--signin","h-100"],[1,"kt-grid__item","kt-grid__item--fluid","kt-grid","kt-grid--desktop","kt-grid--ver-desktop","kt-grid--hor-tablet-and-mobile"],[1,"kt-grid__item","kt-grid__item--fluid","kt-grid__item--center","kt-grid","kt-grid--ver","kt-login__content",2,"background-image","url(assets/images/login-banner.jpg)"],[1,"kt-login__section"],[1,"kt-login__block"],[1,"kt-login__desc"],[1,"kt-grid__item","kt-grid__item--order-tablet-and-mobile-2","kt-grid","kt-grid--hor","kt-login__aside","p-0"],[1,"kt-login__wrapper"],[1,"kt-login__container"],[1,"kt-login__body",2,"padding","25px 30px","border-radius","5px"],[1,"kt-login__logo","mb-4"],["href","#"],[1,"kt-login__signin"],[1,"kt-login__head"],[2,"font-size","2rem","color","#67666e"],[1,"kt-login__form"],["action","",1,"kt-form",3,"formGroup","ngSubmit"],[1,"form-group","mb-4",3,"ngClass"],["type","text","placeholder","UserName","autocomplete","off","formControlName","userid",1,"form-control"],["class","help-block",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"form-group",3,"ngClass"],["type","password","placeholder","Password","formControlName","password",1,"form-control",3,"keypress"],["class","text-center error","class","text-danger",4,"ngIf"],[1,"kt-login__actions"],["id","kt_login_signin_submit","type","submit",1,"btn","btn-primary","kt-btn","px-5",2,"height","38px"],[1,"kt-login__forgot"],[1,"kt-login__title"],["action","",1,"kt-form"],[1,"form-group"],["type","text","placeholder","Email","name","email","id","kt_email","autocomplete","off",1,"form-control"],["id","kt_login_forgot_submit",1,"btn","btn-brand","btn-pill","btn-elevate"],["id","kt_login_forgot_cancel",1,"btn","btn-outline-brand","btn-pill"],[1,"help-block"],["class","text-info",4,"ngIf"],[1,"text-info"],[1,"text-danger"]],template:function(t,e){1&t&&(c.cc(0,"div",0),c.cc(1,"div",1),c.cc(2,"div",2),c.cc(3,"div",3),c.cc(4,"div",4),c.cc(5,"div",5),c.cc(6,"div",6),c.Xb(7,"br"),c.bc(),c.bc(),c.bc(),c.bc(),c.cc(8,"div",7),c.cc(9,"div",8),c.cc(10,"div",9),c.cc(11,"div",10),c.cc(12,"div",11),c.Xb(13,"a",12),c.bc(),c.cc(14,"div",13),c.cc(15,"div",14),c.cc(16,"h2",15),c.Xc(17,"Sign In "),c.bc(),c.bc(),c.cc(18,"div",16),c.cc(19,"form",17),c.nc("ngSubmit",(function(){return e.login()})),c.cc(20,"div",18),c.Xb(21,"input",19),c.Vc(22,d,2,1,"div",20),c.Vc(23,u,3,0,"p",21),c.bc(),c.cc(24,"div",22),c.cc(25,"input",23),c.nc("keypress",(function(){return e.OnKeyPress()})),c.bc(),c.Vc(26,j,2,1,"div",20),c.bc(),c.Vc(27,D,3,1,"p",24),c.cc(28,"div",25),c.cc(29,"button",26),c.Xc(30,"Sign In"),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.cc(31,"div",27),c.cc(32,"div",14),c.cc(33,"h3",28),c.Xc(34,"Forgotten Password ?"),c.bc(),c.cc(35,"div",6),c.Xc(36,"Enter your email to reset your password:"),c.bc(),c.bc(),c.cc(37,"div",16),c.cc(38,"form",29),c.cc(39,"div",30),c.Xb(40,"input",31),c.bc(),c.cc(41,"div",25),c.cc(42,"button",32),c.Xc(43,"Request"),c.bc(),c.cc(44,"button",33),c.Xc(45,"Cancel"),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.bc(),c.bc()),2&t&&(c.Jb(19),c.yc("formGroup",e.loginForm),c.Jb(1),c.yc("ngClass",c.Cc(7,O,e.submitted&&e.f.userid.errors)),c.Jb(2),c.yc("ngIf",e.submitted&&e.f.userid.errors),c.Jb(1),c.yc("ngIf",e.InValidUserName),c.Jb(1),c.yc("ngClass",c.Cc(9,O,e.submitted&&e.f.password.errors)),c.Jb(2),c.yc("ngIf",e.submitted&&e.f.password.errors),c.Jb(1),c.yc("ngIf",e.message))},directives:[r.x,r.o,r.i,s.m,r.d,r.n,r.g,s.o,r.p],styles:["@media only screen and (min-width:1024px){.h-100[_ngcontent-%COMP%]{height:100vh!important}}#kt_login_signin_submit[_ngcontent-%COMP%]{background-color:#5867dd;border-color:#5867dd;color:#fff}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=c.Ub({type:t}),t.\u0275inj=c.Tb({factory:function(e){return new(e||t)},imports:[[i.i.forChild(_)],i.i]}),t})(),g=(()=>{class t{}return t.\u0275mod=c.Ub({type:t}),t.\u0275inj=c.Tb({factory:function(e){return new(e||t)},imports:[[s.c,r.j,r.t,f]]}),t})()},UuEW:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));class s{}},"XN+D":function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));class s{}},ZE33:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));class s{}},dh0H:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));class s{}},kEBx:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));class s{constructor(){this.SelectedProjects=[]}}},m2pD:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));class s{}},nqdq:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var s=o("AytR"),r=o("fXoL");let i=(()=>{class t{constructor(){this.baseUrl=s.a.baseUrl,this.apiurl=this.baseUrl}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},ps0H:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var s=o("fXoL"),r=o("5eHb");let i=(()=>{class t{constructor(t){this.toastr=t}showSuccess(t,e){this.toastr.success(t,e,{closeButton:!0})}showError(t,e){this.toastr.error(t,e,{closeButton:!0})}showInfo(t,e){this.toastr.info(t,e,{closeButton:!0})}showWarning(t,e){this.toastr.warning(t,e,{closeButton:!0})}}return t.\u0275fac=function(e){return new(e||t)(s.kc(r.b))},t.\u0275prov=s.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},sU13:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));class s{}},tHiJ:function(t,e,o){"use strict";o.d(e,"a",(function(){return y}));class s{}class r{}var i=o("AQ2f"),a=o("kEBx"),c=o("dh0H"),l=o("Eu0l"),n=o("T8uj"),h=o("m2pD");class b{}class p{}class d{}var u=o("ZE33");class m{}var j=o("Bl5f"),D=o("XN+D");class O{}var _=o("UuEW"),f=o("sU13"),g=o("JIr8"),P=o("z6cu"),T=o("fXoL"),S=o("tk/3"),N=o("nqdq");let y=(()=>{class t{constructor(t,e){this.http=t,this.commonUrl=e,this.Project_TypeList=[],this.rootUrl=this.commonUrl.apiurl,this.ObjprojectTypeDto=new s,this.ObjEmployeeDetails=new i.a,this.Obj_LoginDTO=new c.a,this.userDTO=new l.a,this.ObjUserDetails=new l.a,this._ObjSharePortfolio=new n.a,this.objPortfolioDTO=new a.a,this.ObjStatusDTO=new h.a,this.ObjNotificationDto=new b,this._ObjChartDTO=new p,this.ObjBarChartDTO=new d,this.ObjSubTaskDTO=new u.a,this.objColumnChartDTO=new m,this.objDropdownsDTO=new j.a,this._ObjCompletedProj=new D.a,this._objDARAchievement=new O,this._ObjAssigntaskDTO=new _.a,this.ObjCategoryDTO=new f.a,this.ObjDto=new r}GetProjectTypeList(){let t=localStorage.getItem("EmpNo");return this.ObjUserDetails.Emp_No=t,this.http.post(this.rootUrl+"TestAPI/NewGetProjectTypes",this.ObjUserDetails)}GetProjects(t){return this.ObjprojectTypeDto.ProjectType_ID=t,this.http.post(this.rootUrl+"TestAPI/NewGetProjects",this.ObjprojectTypeDto)}GetProjects_EPDB(){return this.http.post(this.rootUrl+"TestAPI/NewGetProjectsDetails",this.ObjDto)}AlreadyExistsPortfolioService(t){return this.objPortfolioDTO.SearchText=t,this.http.post(this.rootUrl+"Projects/NewCheckPortfolioExists",this.objPortfolioDTO)}GetProjectsBy_portfolioId(t){return this.objPortfolioDTO.Portfolio_ID=t,this.objPortfolioDTO.EmployeeId=localStorage.getItem("EmpNo"),this.http.post(this.rootUrl+"TestAPI/NewGetPortfolioSharePreferences_Json",this.objPortfolioDTO)}GetProjectsByUserName_Service(t){let e=localStorage.getItem("EmpNo");return this.ObjUserDetails.Emp_No=e,this.ObjUserDetails.SelectedBlock_No=t.SelectedBlock_No,this.ObjUserDetails.SelectedEmp_No=t.SelectedEmp_No,this.ObjUserDetails.SelectedStatus=t.SelectedStatus,this.ObjUserDetails.PageNumber=t.PageNumber,this.ObjUserDetails.PageSize=t.PageSize,this.ObjUserDetails.SearchText=t.SearchText,this.ObjUserDetails.PortfolioId=t.PortfolioId,this.http.post(this.rootUrl+"TestAPI/NewGetProjectDetailsByUserName",this.ObjUserDetails)}GetProjectsByUserName_Service_ForSummary(t){let e=localStorage.getItem("EmpNo");return this.ObjUserDetails.Emp_No=e,this.ObjUserDetails.SelectedBlock_No=t.SelectedBlock_No,this.ObjUserDetails.SelectedEmp_No=t.SelectedEmp_No,this.ObjUserDetails.SelectedStatus=t.SelectedStatus,this.ObjUserDetails.PageNumber=t.PageNumber,this.ObjUserDetails.PageSize=t.PageSize,this.ObjUserDetails.SearchText=t.SearchText,this.http.post(this.rootUrl+"TestAPI/NewGetProjectDetailsByUserName_ForSummary",this.ObjUserDetails)}GetProjectsByUserName_Service_ForProjectsTODO(t){let e=localStorage.getItem("EmpNo");return this.ObjUserDetails.Emp_No=e,this.ObjUserDetails.SelectedBlock_No=t.SelectedBlock_No,this.ObjUserDetails.SelectedEmp_No=t.SelectedEmp_No,this.ObjUserDetails.SelectedStatus=t.SelectedStatus,this.ObjUserDetails.PageNumber=t.PageNumber,this.ObjUserDetails.PageSize=t.PageSize,this.ObjUserDetails.SearchText=t.SearchText,this.http.post(this.rootUrl+"TestAPI/NewGetProjectDetailsByUserName_ForToDoProjects",this.ObjUserDetails)}GetProjectsForRunwayTaskDropdown(t){let e=localStorage.getItem("EmpNo");return this.ObjUserDetails.Emp_No=e,this.ObjUserDetails.PageNumber=t.PageNumber,this.ObjUserDetails.PageSize=t.PageSize,this.ObjUserDetails.SearchText=t.SearchText,this.http.post(this.rootUrl+"Projects/NewGetProjectsForRunwayTask",this.ObjUserDetails)}GetProjectsFor_ProjectsChart(t){return this.ObjUserDetails.Emp_No=t,this.http.post(this.rootUrl+"TestAPI/NewGetProjectDetailsByUserName",this.ObjUserDetails)}GetEmployeesById(t){return this.ObjEmployeeDetails.Emp_No=t,this.http.post(this.rootUrl+"TestAPI/NewGetEmployeById",this.ObjEmployeeDetails)}GetEmployeesby_CompNo(t,e){return this.ObjEmployeeDetails.Emp_Comp_No=t,this.ObjEmployeeDetails.Portfolio_ID=e,this.http.post(this.rootUrl+"TestAPI/NewGetEmployeesByComp_No",this.ObjEmployeeDetails)}SavePortfolio(t){return this.objPortfolioDTO=t,t.Portfolio_ID=this.ObjUserDetails.PortfolioId,this.objPortfolioDTO.Portfolio_Name=t.Portfolio_Name,this.objPortfolioDTO.SelectedProjects=t.SelectedProjects,0==this.objPortfolioDTO.Portfolio_ID?(this.objPortfolioDTO.Created_By=this.ObjUserDetails.Emp_No,this.objPortfolioDTO.Modified_By=null):(this.objPortfolioDTO.Created_By=null,this.objPortfolioDTO.Modified_By=this.ObjUserDetails.Emp_No,this.objPortfolioDTO.Created_By=this.ObjUserDetails.Emp_No),this.http.post(this.rootUrl+"/TestAPI/NewInsertPortfolio",t)}GetPortfolio(){return this.http.post(this.rootUrl+"TestAPI/NewGetPortfolio",this.objPortfolioDTO)}GetCompanies(){return this.http.post(this.rootUrl+"TestAPI/NewGetCompanies",this.obj_CompanyDTO)}LoginCredentials(t){return this.http.post(this.rootUrl+"TestAPI/NewGetLoginDetails",t)}NewGetUserDetails(t){return this.userDTO.UserName=t,this.http.post(this.rootUrl+"TestAPI/NewGetUserDetails",this.userDTO).subscribe(t=>{this.user_DetailList=t,this.EmpNo=t[0].Emp_No.replace(/\s/g,""),this.EmpCompNo=t[0].Emp_Comp_No.replace(/\s/g,""),this.SystemRole=t[0].Emp_SystemRole})}GetPortfolioByEmployee(){let t=localStorage.getItem("EmpNo");return this.ObjUserDetails.Emp_No=t,this.http.post(this.rootUrl+"TestAPI/NewGetPortfolioByEmployee",this.ObjUserDetails)}SharePortfolio(t){return console.log("Obj Share----\x3e",t),this.http.post(this.rootUrl+"TestAPI/NewInsertUpdateSharePortfolio",t).subscribe(t=>{this._ObjSharePortfolio=t})}GetPreferences(t,e){return this._ObjSharePortfolio.EmployeeId=t,this._ObjSharePortfolio.Portfolio_ID=e,this.http.post(this.rootUrl+"TestAPI/NewGetPreferencesByEmployeeId",this._ObjSharePortfolio)}GetShareDetailsBy_PId(t){return this._ObjSharePortfolio.Portfolio_ID=t,this.http.post(this.rootUrl+"TestAPI/NewGetShareDetailsByPortfolio_ID",this._ObjSharePortfolio)}GetStatusByPortfolioId(t){return this.ObjStatusDTO.Portfolio_ID=t,this.http.post(this.rootUrl+"TestAPI/NewGetStatus",this._ObjSharePortfolio)}GetPortfolioStatus(t){return this.ObjStatusDTO.Emp_No=t.Emp_No,this.ObjStatusDTO.SelectedEmployee=t.SelectedEmployee,this.ObjStatusDTO.SelectedCompany=t.SelectedCompany,this.ObjStatusDTO.SelectedStatus=t.SelectedStatus,this.ObjStatusDTO.PageNumber=t.PageNumber,this.ObjStatusDTO.RowsOfPage=30,this.ObjStatusDTO.SearchText=t.SearchText,this.http.post(this.rootUrl+"TestAPI/NewGetPortfolioStatusColor",this.ObjStatusDTO)}GetActivities(t){return this.ObjNotificationDto.Emp_No=t,this.http.post(this.rootUrl+"Notification/NewGetNotificationActivities",this.ObjNotificationDto)}SetFavourite_Service(t,e,o){return this.ObjStatusDTO.Portfolio_ID=t,this.ObjStatusDTO.IsFavourite=e,this.ObjStatusDTO.Emp_No=o,this.http.post(this.rootUrl+"TestAPI/NewPortfolioIsFavourite",this.ObjStatusDTO)}Portfolio_Rename(t,e){return this.ObjStatusDTO.Portfolio_ID=e,this.ObjStatusDTO.Portfolio_Name=t,this.http.post(this.rootUrl+"TestAPI/NewPortfolioRenamed",this.ObjStatusDTO)}Portfolio_ShareUsersDelete(t,e,o){return this.objPortfolioDTO.Portfolio_ID=t,this.objPortfolioDTO.Shared_To=e,this.objPortfolioDTO.SharedbyEmpNo=o,this.http.post(this.rootUrl+"TestAPI/NewDeletePortfolioShareUsers",this.objPortfolioDTO)}_Chart_Percentage(t){return this._ObjChartDTO.PortfolioId=t,this.http.post(this.rootUrl+"TestAPI/NewGetChartDetails",this._ObjChartDTO)}_BarChart(t,e){return this.ObjBarChartDTO.PortfolioId=t,this.ObjBarChartDTO.Emp_No=e,this.http.post(this.rootUrl+"TestAPI/NewGetBarChart",this.ObjBarChartDTO)}SubTaskDetailsService(t){return this.ObjSubTaskDTO.Project_Code=t,this.http.post(this.rootUrl+"TestAPI/NewSubTaskDetails",this.ObjSubTaskDTO)}SubTaskDetailsService_ToDo_Page(t,e){return this.ObjSubTaskDTO.Project_Code=t,this.ObjSubTaskDTO.Comp_No=e,this.http.post(this.rootUrl+"TestAPI/NewSubTaskDetails",this.ObjSubTaskDTO)}ColumnChartData(t){return this.objColumnChartDTO.Emp_No=t,this.http.post(this.rootUrl+"TestAPI/NewColumnChart",this.objColumnChartDTO)}DARGraphCalculations_Json(t){return this.objColumnChartDTO.ProjectCode=t,this.http.post(this.rootUrl+"TestAPI/NewDARGraphCalculations_Json",this.objColumnChartDTO)}GetDropDownsData(t){return this.objDropdownsDTO.EmpNo=t.EmpNo,this.objDropdownsDTO.Selected_ProjectType=t.Selected_ProjectType,this.objDropdownsDTO.Selected_Status=t.Selected_Status,this.objDropdownsDTO.SelectedEmp_No=t.SelectedEmp_No,this.objDropdownsDTO.Selected_SearchText=t.Selected_SearchText,this.objDropdownsDTO.PortfolioId=t.PortfolioId,this.http.post(this.rootUrl+"TestAPI/NewGetDropdownsData",this.objDropdownsDTO)}GetDropDownsData_ForSummary(t){return this.objDropdownsDTO.EmpNo=t.EmpNo,this.objDropdownsDTO.Selected_ProjectType=t.Selected_ProjectType,this.objDropdownsDTO.Selected_Status=t.Selected_Status,this.objDropdownsDTO.SelectedEmp_No=t.SelectedEmp_No,this.objDropdownsDTO.Selected_SearchText=t.Selected_SearchText,this.http.post(this.rootUrl+"TestAPI/NewGetDropdownsDataForSummary",this.objDropdownsDTO)}clearSession(){localStorage.clear()}DeleteProject(t,e,o,s,r,i){return this.objPortfolioDTO.Portfolio_ID=e,this.objPortfolioDTO.Project_ID=t,this.objPortfolioDTO.Project_Code=o,this.objPortfolioDTO.Project_Name=s,this.objPortfolioDTO.Created_By=r,this.objPortfolioDTO.Deleted_By=i,this.http.post(this.rootUrl+"TestAPI/NewDeletePortfolioProjects",this.objPortfolioDTO)}_DeletePortfolios(t,e,o,s,r,i,a){return this.objPortfolioDTO.Portfolio_ID=t,this.objPortfolioDTO.Portfolio_Name=e,this.objPortfolioDTO.Created_By=o,this.objPortfolioDTO.Created_DT=s,this.objPortfolioDTO.Deleted_By=r,this.objPortfolioDTO.ProjectsCount=i,this.objPortfolioDTO.Status=a,this.http.post(this.rootUrl+"TestAPI/NewDeletePortfolio",this.objPortfolioDTO)}_GetDashboardSummaryCount(t){return this.ObjNotificationDto.Emp_No=t,this.http.post(this.rootUrl+"Notification/NewGetDashboardSummaryCount",this.ObjNotificationDto)}_GetCompletedProjects(t){return this._ObjCompletedProj.Emp_No=t.Emp_No,this._ObjCompletedProj.Mode=t.Mode,this._ObjCompletedProj.PageNumber=t.PageNumber,this._ObjCompletedProj.SelectedBlock_No=t.SelectedBlock_No,this._ObjCompletedProj.SelectedStatus=t.SelectedStatus,this._ObjCompletedProj.SelectedEmp_No=t.SelectedEmp_No,this._ObjCompletedProj.CategoryId=t.CategoryId,this._ObjCompletedProj.Filter=t.Filter,this._ObjCompletedProj.Project_SearchText=t.Project_SearchText,this.http.post(this.rootUrl+"Notification/NewGetCompletedProjects",this._ObjCompletedProj)}_GetCalendarProjects(t){return this._ObjCompletedProj.Emp_No=t,this.http.post(this.rootUrl+"Notification/NewGetCalendarProjects",this._ObjCompletedProj)}_GetDARAchievements(t){return this._objDARAchievement.project_code=t,this.http.post(this.rootUrl+"Notification/NewGetDARAchievement",this._objDARAchievement)}_GetNewProjectCode(t){return this.ObjSubTaskDTO.MasterCode=t.MasterCode,this.http.post(this.rootUrl+"Notification/GenerateNewProjectCode",this.ObjSubTaskDTO)}_InsertNewSubtask(t){return this.http.post(this.rootUrl+"Notification/NewInsertSubTaskByProjectCode",t,{reportProgress:!0,observe:"events"}).pipe(Object(g.a)(this.errorMgmt))}_fileuploadService(t){return this.http.post(this.rootUrl+"Notification/UpdateMainProject_ByProjectCode",t,{reportProgress:!0,observe:"events"}).pipe(Object(g.a)(this.errorMgmt))}_UpdateSubtaskByProjectCode(t){return this.http.post(this.rootUrl+"Notification/NewUpdateSubTaskByProjectCode",t,{reportProgress:!0,observe:"events"}).pipe(Object(g.a)(this.errorMgmt))}_InsertOnlyTaskServie(t){return this._ObjAssigntaskDTO.TypeOfTask=t.TypeOfTask,this._ObjAssigntaskDTO.CreatedBy=localStorage.getItem("EmpNo"),this._ObjAssigntaskDTO.ProjectType=t.ProjectType,this._ObjAssigntaskDTO.TaskName=t.TaskName,this._ObjAssigntaskDTO.TaskDescription=t.TaskDescription,this._ObjAssigntaskDTO.AssignTo=t.AssignTo,this._ObjAssigntaskDTO.StartDate=t.StartDate,this._ObjAssigntaskDTO.EndDate=t.EndDate,this._ObjAssigntaskDTO.ProjectDays=t.ProjectDays,this._ObjAssigntaskDTO.SubmissionType=t.SubmissionType,this._ObjAssigntaskDTO.AssignId=t.AssignId,this._ObjAssigntaskDTO.CategoryName=t.CategoryName,this._ObjAssigntaskDTO.CategoryId=t.CategoryId,this._ObjAssigntaskDTO.Remarks=t.Remarks,this._ObjAssigntaskDTO.Reference=t.Reference,this.http.post(this.rootUrl+"Notification/NewInsertOnlyTask",this._ObjAssigntaskDTO)}_InsertAssignTaskServie(t){return this.http.post(this.rootUrl+"Notification/NewInsertAssignTask",t)}_CategoryRenameDelete(t){return this.ObjCategoryDTO.Mode=t.Mode,this.ObjCategoryDTO.CategoryId=t.CategoryId,this.ObjCategoryDTO.CategoryName=t.CategoryName,this.ObjCategoryDTO.CurrentUser=t.CurrentUser,this.http.post(this.rootUrl+"Category/NewCategoryRenameDelete",this.ObjCategoryDTO)}_ProjectRenameService(t,e,o,s){return this.ObjDto.Project_Id=t,this.ObjDto.Project_Name=e,this.ObjDto.Project_Description=o,this.ObjDto.Emp_No=s,this.http.post(this.rootUrl+"Category/NewProjectRename",this.ObjDto)}SharingDataService(t){return t}errorMgmt(t){let e="";return e=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,console.log(e),Object(P.a)(e)}_setMessage(t){this.Mode=t}_getMessage(){return this.Mode}}return t.\u0275fac=function(e){return new(e||t)(T.kc(S.b),T.kc(N.a))},t.\u0275prov=T.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);