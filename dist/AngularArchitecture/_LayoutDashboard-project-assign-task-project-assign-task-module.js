(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_LayoutDashboard-project-assign-task-project-assign-task-module"],{

/***/ "./src/app/_LayoutDashboard/project-assign-task/project-assign-task-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-assign-task/project-assign-task-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ProjectAssignTaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAssignTaskRoutingModule", function() { return ProjectAssignTaskRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _project_assign_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-assign-task.component */ "./src/app/_LayoutDashboard/project-assign-task/project-assign-task.component.ts");





//import { ProjectAssignTaskModule } from './project-assign-task.module';
const routes = [{
        path: '', component: _project_assign_task_component__WEBPACK_IMPORTED_MODULE_2__["ProjectAssignTaskComponent"],
        children: [
            {
                path: 'projectinfo/:projectcode',
                loadChildren: () => Promise.all(/*! import() | project-info-project-info-module */[__webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~_LayoutDashboard-more-details-more-details-modul~98b028d3"), __webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~_LayoutDashboard-home-home-module~_LayoutDashboa~20575a49"), __webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~project-info-project-info-module"), __webpack_require__.e("default~_LayoutDashboard-projects-summary-projects-summary-module~project-info-project-info-module"), __webpack_require__.e("project-info-project-info-module")]).then(__webpack_require__.bind(null, /*! ../project-info/project-info.module */ "./src/app/_LayoutDashboard/project-info/project-info.module.ts")).then(m => m.ProjectInfoModule)
            },
            {
                path: 'ActionToAssign',
                loadChildren: () => __webpack_require__.e(/*! import() | action-to-assign-action-to-assign-module */ "action-to-assign-action-to-assign-module").then(__webpack_require__.bind(null, /*! ../action-to-assign/action-to-assign.module */ "./src/app/_LayoutDashboard/action-to-assign/action-to-assign.module.ts")).then(m => m.ActionToAssignModule),
            }
        ]
    }];
class ProjectAssignTaskRoutingModule {
}
ProjectAssignTaskRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectAssignTaskRoutingModule });
ProjectAssignTaskRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectAssignTaskRoutingModule_Factory(t) { return new (t || ProjectAssignTaskRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectAssignTaskRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectAssignTaskRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_LayoutDashboard/project-assign-task/project-assign-task.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-assign-task/project-assign-task.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProjectAssignTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAssignTaskComponent", function() { return ProjectAssignTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/completed-projects-dto */ "./src/app/_Models/completed-projects-dto.ts");
/* harmony import */ var src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/assigntask-dto */ "./src/app/_Models/assigntask-dto.ts");
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/project-type.service */ "./src/app/_Services/project-type.service.ts");
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/notification.service */ "./src/app/_Services/notification.service.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ "./src/app/_Services/bs-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function ProjectAssignTaskComponent_li_73_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_li_73_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.OnAssigntaskClick(item_r4.Employee, item_r4.End_Date, item_r4.ProjectType, item_r4.Start_Date, item_r4.Task_Description, item_r4.Task_Name, item_r4.AssignedBy, item_r4.CreatedBy, item_r4.IsActive, item_r4.Reject, item_r4.Reject_Comments, item_r4.Status, item_r4.Reference, item_r4.ProjectDays, item_r4.Creation_Date, item_r4.SubmissionType, item_r4.Modified_DT, item_r4.Project_Code, item_r4.Remarks, item_r4.FileName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.Task_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.Employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, item_r4.Start_Date, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.ProjectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 8, item_r4.End_Date, "dd-MM-yyyy"), "");
} }
function ProjectAssignTaskComponent_span_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.ProjectDays, " days");
} }
function ProjectAssignTaskComponent_span_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.SubmissionType, "");
} }
function ProjectAssignTaskComponent_div_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.name, "");
} }
const _c0 = function (a0, a1, a2) { return { "text-success": a0, "text-info": a1, "text-warning": a2 }; };
class ProjectAssignTaskComponent {
    constructor(ProjectTypeService, notifyService, dateAdapter, http, router, BsService) {
        this.ProjectTypeService = ProjectTypeService;
        this.notifyService = notifyService;
        this.dateAdapter = dateAdapter;
        this.http = http;
        this.router = router;
        this.BsService = BsService;
        this.dropdownList = [];
        this.selectedItems = [];
        this.selectedItems_Employee = [];
        this.dropdownSettings = {};
        this.dropdownSettings_EMP = {};
        this.paragraph_msg = false;
        this._DisplayForm = true;
        this.Div_TaskDetails = true;
        this.selectedEmployee = "";
        this.disablePreviousDate = new Date();
        this.disableAfterStartDate = new Date();
        this.ProjectTypelist = [];
        this.FilteredText = "";
        this.ProjectCode = null;
        this._taskName = "";
        this._description = "";
        this._DemoVersion = true;
        this.DemoTasksList = [
            {
                id: 1,
                name: 'Creative Planner Single User Login.'
            },
            {
                id: 2,
                name: 'Meeting With Rafi Sir.'
            },
            {
                id: 3,
                name: 'Merge Multiple Apps Organisation level.'
            }
        ];
        this._ObjCompletedProj = new src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_1__["CompletedProjectsDTO"]();
        this._ObjAssigntaskDTO = new src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_2__["AssigntaskDTO"]();
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
        this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
        this.disableAfterStartDate.setDate(this.disablePreviousDate.getDate());
    }
    ngOnInit() {
        this.CurrentUser_ID = localStorage.getItem('EmpNo');
        this.GetAssignTask();
        this.dropdownSettings = {
            singleSelection: true,
            idField: 'Exec_BlockNo',
            textField: 'Exec_BlockName',
            itemsShowLimit: 1,
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.dropdownSettings_EMP = {
            searchAutofocus: true,
            singleSelection: true,
            idField: 'Emp_No',
            textField: 'DisplayName',
            itemsShowLimit: 1,
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
    }
    GetAssignTask() {
        this.Div_TaskDetails = true;
        this.FilteredText = "ALL";
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this._ObjCompletedProj.Filter = null;
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
            // console.log("On First Load---->", this.Assigntask_List);
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.countAssigned = (data[0]['CountAssigned']);
            // console.log("Count--->",this.countAssigne)
            if (this.countAssigned == 0) {
                this.NotfoundAssignedTask = "Sorry, No records found ! ";
                this.paragraph_msg = true;
            }
            else {
                this.NotfoundAssignedTask = "";
                this.paragraph_msg = false;
            }
            this.countAccepted = (data[0]['CountAccepted']);
            this.countCompleted = (data[0]['CountCompleted']);
            this.countInprocess = (data[0]['CountInProcess']);
            this.countNotStarted = (data[0]['CountNotStarted']);
            this.countRejected = (data[0]['CountRejected']);
        });
    }
    GetAccepted() {
        this.Div_TaskDetails = true;
        this.FilteredText = "Accepted";
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this._ObjCompletedProj.Filter = 'Accepted';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
            //console.log("On Second Load---->", this.Assigntask_List);
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.countAssigned = (data[0]['CountAssigned']);
            // console.log("Count--->",this.countAssigne)
            if (this.countAssigned == 0) {
                this.NotfoundAssignedTask = "Sorry, No records found ! ";
                this.paragraph_msg = true;
            }
            else {
                this.NotfoundAssignedTask = "";
                this.paragraph_msg = false;
            }
            this.countAccepted = (data[0]['CountAccepted']);
            this.countCompleted = (data[0]['CountCompleted']);
            this.countInprocess = (data[0]['CountInProcess']);
            this.countNotStarted = (data[0]['CountNotStarted']);
            this.countRejected = (data[0]['CountRejected']);
        });
    }
    GetInProcess() {
        this.Div_TaskDetails = true;
        this.FilteredText = "In Process";
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this._ObjCompletedProj.Filter = 'InProcess';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
            //  console.log("On Second Load---->", this.Assigntask_List);
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.countAssigned = (data[0]['CountAssigned']);
            // console.log("Count--->",this.countAssigne)
            if (this.countAssigned == 0) {
                this.NotfoundAssignedTask = "Sorry, No records found ! ";
                this.paragraph_msg = true;
            }
            else {
                this.NotfoundAssignedTask = "";
                this.paragraph_msg = false;
            }
            this.countAccepted = (data[0]['CountAccepted']);
            this.countCompleted = (data[0]['CountCompleted']);
            this.countInprocess = (data[0]['CountInProcess']);
            this.countNotStarted = (data[0]['CountNotStarted']);
            this.countRejected = (data[0]['CountRejected']);
        });
    }
    GetRejected() {
        this.Div_TaskDetails = true;
        this.FilteredText = "Rejected";
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this._ObjCompletedProj.Filter = 'Rejected';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
            //console.log("On Second Load---->", this.Assigntask_List);
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.countAssigned = (data[0]['CountAssigned']);
            // console.log("Count--->",this.countAssigne)
            if (this.countAssigned == 0) {
                this.NotfoundAssignedTask = "Sorry, No records found ! ";
                this.paragraph_msg = true;
            }
            else {
                this.NotfoundAssignedTask = "";
                this.paragraph_msg = false;
            }
            this.countAccepted = (data[0]['CountAccepted']);
            this.countCompleted = (data[0]['CountCompleted']);
            this.countInprocess = (data[0]['CountInProcess']);
            this.countNotStarted = (data[0]['CountNotStarted']);
            this.countRejected = (data[0]['CountRejected']);
        });
    }
    GetNotStarted() {
        this.Div_TaskDetails = true;
        this.FilteredText = "Not Started";
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this._ObjCompletedProj.Filter = 'NotStarted';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
            //console.log("On Second Load---->", this.Assigntask_List);
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.countAssigned = (data[0]['CountAssigned']);
            // console.log("Count--->",this.countAssigne)
            if (this.countAssigned == 0) {
                this.NotfoundAssignedTask = "Sorry, No records found ! ";
                this.paragraph_msg = true;
            }
            else {
                this.NotfoundAssignedTask = "";
                this.paragraph_msg = false;
            }
            this.countAccepted = (data[0]['CountAccepted']);
            this.countCompleted = (data[0]['CountCompleted']);
            this.countInprocess = (data[0]['CountInProcess']);
            this.countNotStarted = (data[0]['CountNotStarted']);
            this.countRejected = (data[0]['CountRejected']);
        });
    }
    Search() {
        if (this._AssignTaskSearch != "") {
            this.Assigntask_List = this.Assigntask_List.filter(res => {
                return res.Task_Name.toLocaleLowerCase().match(this._AssignTaskSearch.toLocaleLowerCase());
            });
        }
        else if (this._AssignTaskSearch == "") {
            this.ngOnInit();
        }
    }
    ProjectTypeOnSelect(obj) {
        this.selectedProjectType = obj['Exec_BlockNo'];
    }
    ProjectTypeOnDeselect(obj) {
        this.selectedProjectType = "Not Selected";
    }
    EmpOnSelect(obj) {
        this.selectedEmployee = obj['Emp_No'];
    }
    EmpOnDeselect(obj) {
        this.selectedEmployee = "Not Selected";
    }
    search(value) {
        value = this.searchText;
    }
    ShowForm() {
        this.paragraph_msg = true;
        this._DisplayForm = false;
        this.Div_TaskDetails = true;
        this._DemoVersion = true;
        let typeoftask = "IFAT";
        this.BsService.setNewTypeofTask(typeoftask);
        this.router.navigate(["AssignTask/ActionToAssign/"]);
        document.getElementById("mysideInfobar").style.width = "60%";
        document.getElementById("rightbar-overlay").style.display = "block";
    }
    closeInfo() {
        this.Clearfeilds();
        document.getElementById("mysideInfobar").style.width = "0px";
        document.getElementById("rightbar-overlay").style.display = "none";
    }
    OnAssigntaskClick(Emp, Edt, Ptype, Sdt, TDesc, TName, ABy, CBy, IsAct, Reject, RejCommts, Status, Ref, Dur, Cr_DT, Sub_type, Mdy_DT, pCode, Remarks, FileName) {
        this.paragraph_msg = true;
        this.Div_TaskDetails = false;
        this._DisplayForm = true;
        this.Task_Name = TName;
        this.Task_Description = TDesc;
        this.Start_Date = Sdt;
        this.End_Date = Edt;
        this.ProjectType = Ptype;
        this.Employee = Emp;
        this.AssignedBy = ABy;
        this.CreatedBy = CBy;
        this.Isactive = IsAct;
        this.Rejected = Reject;
        this.RejectedComment = RejCommts;
        this.Status = Status;
        this.ProjectDays = Dur;
        this.Reference = Ref;
        this.Remarks = Remarks;
        this.ModifyDate = Mdy_DT;
        this.Creation_Date = Cr_DT;
        this.SubmissionType = Sub_type;
        this.ProjectCode = pCode;
        this.FileName = FileName;
        this.closeInfo();
    }
    onFileChange(filepath) {
        this._fileName = filepath.replace("C:\\fakepath\\", "");
    }
    LoadDocument(url) {
        this.src = url;
        var myWindow = window.open(url);
        myWindow.focus();
    }
    // OnSubmit() {
    //   if (this._taskName != "") {
    //     this._ObjAssigntaskDTO.TypeOfTask = "IFAT";
    //     this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
    //     this._ObjAssigntaskDTO.ProjectType = this.selectedProjectType;
    //     this._ObjAssigntaskDTO.TaskName = this._taskName;
    //     this._ObjAssigntaskDTO.TaskDescription = this._description;
    //     this._ObjAssigntaskDTO.AssignTo = this.selectedEmployee;
    //     this._ObjAssigntaskDTO.StartDate = this._StartDate;
    //     this._ObjAssigntaskDTO.EndDate = this._EndDate;
    //     this._ObjAssigntaskDTO.SubmissionType = this.SelectedSubmissionType;
    //     this._ObjAssigntaskDTO.Remarks = this._remarks;
    //     //Days Difference
    //     var Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
    //     var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    //     this._ObjAssigntaskDTO.ProjectDays = (-Difference_In_Days);
    //     //this._ObjAssigntaskDTO.ProjectDays = this._ObjAssigntaskDTO.ProjectDays * 8 / 1;
    //     this._ObjAssigntaskDTO.Reference = this._fileName;
    //     this.ProjectTypeService._InsertAssignTaskServie(this._ObjAssigntaskDTO).subscribe(
    //       (data) => {
    //         this.GetAssignTask();
    //         this.notifyService.showSuccess("", "Inserted Successfully");
    //         this.closeInfo();
    //       });
    //   }
    //   else {
    //     this.notifyService.showInfo("Empty Inputs Found,   ...", "Try Again");
    //   }
    // }
    Clearfeilds() {
        this.selectedProjectType = "";
        this._taskName = "";
        this._description = "";
        this.selectedEmployee = "";
        this._StartDate = null;
        this._EndDate = null;
        this.SelectedSubmissionType = "";
        this._fileName = "";
        this.selectedItems = [];
        this.selectedItems_Employee = [];
    }
    DemoView() {
        this.paragraph_msg = true;
        this.Div_TaskDetails = true;
        this._DemoVersion = false;
        this.NotfoundAssignedTask = "";
        this.closeInfo();
    }
    EnterSubmit(_Demotext) {
        if (_Demotext == "") {
            this.notifyService.showError("Plz Enter Task Name", "Failed To Add !");
        }
        else {
            let NewDemoTasksList = {
                id: 4,
                name: _Demotext,
            };
            this.DemoTasksList.push(NewDemoTasksList);
            this.DemoTasksList = this.DemoTasksList;
            this._Demotext = "";
            this.notifyService.showSuccess("Successfully Added", "Add Message");
        }
    }
    onFileSelected(event) {
        if (event.target.files.length > 0) {
            this._fileName = event.target.files[0]['name'];
            // console.log(this.filename22)
        }
    }
    submit() {
        debugger;
        const formData = new FormData();
        formData.append('file', this.filename22);
        //"http://localhost:4200/backend/dashboard"
        let url = "http://localhost:1221/Uploads";
        let angularUrl = "http://localhost:4200/Uploads";
        this.http.post(url, formData)
            .subscribe(res => {
            console.log(res);
            // alert('Uploaded Successfully.');
        });
    }
    ProjectInfoDetails() {
        console.log("For Accept", this.ProjectCode);
        document.getElementById("mysideInfobar").style.width = "60%";
        //document.getElementById("rightbar-overlay").style.display = "block";
        this.router.navigate(["AssignTask/projectinfo", this.ProjectCode]);
    }
    moreDetails() {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${this.ProjectCode}`;
        var myWindow = window.open(myurl, this.ProjectCode);
        myWindow.focus();
    }
}
ProjectAssignTaskComponent.ɵfac = function ProjectAssignTaskComponent_Factory(t) { return new (t || ProjectAssignTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_3__["ProjectTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_8__["BsServiceService"])); };
ProjectAssignTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectAssignTaskComponent, selectors: [["app-project-assign-task"]], inputs: { min: "min" }, decls: 207, vars: 50, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title", "mr-2"], [1, "fab", "fa-buffer", "mr-2", "text-primary"], [1, "text-muted", "mt-2"], [1, "kt-header__topbar", "pr-0"], [1, "kt-widget19__stats", "text-center", "px-4", "m-auto"], [1, "btn", "btn-primary", "btn-sm", "btn-bold", "cust-btn", 3, "click"], [1, "fas", "fa-plus", "mr-2"], [1, "kt-widget19__stats", "text-center", "mr-1", "m-auto"], [1, "btn-group"], ["aria-expanded", "true", "data-toggle", "dropdown", 1, "btn", "btn-info", "btn-sm", "cust-btn", "dropdown-toggle", "waves-effect", "show"], [1, "fas", "fa-ellipsis-v", "mr-2"], [1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-header"], [1, "fas", "fa-filter", "mr-2"], [1, "dropdown-item", 3, "click"], [1, "kt-badge", "kt-badge--primary", "kt-badge--inline", "mr-2"], [1, "kt-drop-text"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "mr-2"], [1, "kt-badge", "kt-badge--info", "kt-badge--inline", "mr-2"], [1, "dropdown-item"], [1, "kt-badge", "kt-badge--danger", "kt-badge--inline", "mr-2"], [1, "kt-badge", "kt-badge--dark", "kt-badge--inline", "mr-2"], [1, "col-lg-3", "p-0"], [1, "card", "shadow-sm", "brdr-r-0"], [1, "card-header"], ["type", "search", "placeholder", "Search for assigned task..", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "d-none"], [1, "text-primary"], [1, "sidebar", "pr-2"], [1, "scrollbar"], [1, "side-bar-box"], [4, "ngFor", "ngForOf"], [1, "col-lg-9", "p-0"], [2, "color", "lightgray", "font-size", "large", 3, "hidden"], [2, "margin", "0px", "color", "lightgrey"], [1, "mt-0", "card", "border-left-0", "shadow-sm", "scrollbar-rt", 3, "hidden"], [1, "subtask-list"], [1, "kt-widget12"], [1, "kt-widget12__content"], [1, "d-flex", "justify-content-between", "flex-wrap", 2, "border-bottom", "1px solid #eee"], [1, "text-right", "col-lg-12", 3, "hidden"], ["title", "More Infomation", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fa", "fa-chart-bar"], ["title", "Project Infomation", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fa", "fa-info-circle", "mr-0"], ["title", "Add Assign Task", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-plus", "mr-0"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1"], [1, "fas", "fa-sort-alpha-up", "fa-lg", "mr-0"], [1, "text-info", "strong", "h5", "mt-3", "ml-3"], [1, "mb-3", "mt-1", "pl-15px", "h5", 2, "color", "grey", "font-size", "small"], ["id", "Span_DescName"], [1, "mb-1", "pl-15px"], [1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-project-diagram", "text-muted", "mr-1"], [1, "mr-3", "text-nowrap", "mb-2", "d-inline-block", 3, "ngClass"], [1, "fas", "fa-calendar-alt", "text-muted", "mr-1"], [1, "fas", "fa-clock", "text-muted", "mr-1"], ["class", "my-1 fs-4 kt-widget12__value", 4, "ngIf"], [1, "text-muted", "mr-1"], [1, "fas", "fa-file-pdf", "text-muted", "mr-1"], [1, "text-info", "curser-pointer", 3, "click"], [1, "fas", "fa-registered", "text-muted", "mr-1"], [3, "hidden"], [1, "scrollbar", 3, "hidden"], ["class", "assigned_task d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "add_assigned_task", 3, "hidden"], [1, "form-group", "mb-0"], [1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "la", "la-plus", "mr-0"], ["type", "text", "placeholder", "Add Task", "aria-describedby", "basic-addon1", 1, "form-control", "add_assign_task_input", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "la", "la-calendar-o"], ["id", "basic-addon1", "data-toggle", "modal", "data-target", "#AssignTo", 1, "input-group-text", "curser-pointer"], [1, "la", "la-user"], ["id", "basic-addon1", "data-toggle", "modal", "data-target", "#AttachmentModal", 1, "input-group-text"], [1, "la", "la-paperclip"], ["id", "AssignTo", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"], ["id", "AttachmentModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["href", "#"], [1, "la", "la-angle-right"], ["id", "rightbar-overlay"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], [3, "click"], [1, "project-title", "mb-2"], [1, "d-flex", "justify-content-between"], [1, "mb-2"], [1, "my-1", "fs-4", "kt-widget12__value"], [1, "assigned_task", "d-flex", "justify-content-between"], [1, "la", "la-check"], [1, "la", "la-star-o"], [1, "la", "la-trash"]], template: function ProjectAssignTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Assigned Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_button_click_14_listener() { return ctx.ShowForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Add Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Filter Tasks :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_25_listener() { return ctx.GetAssignTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total Assigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_31_listener() { return ctx.GetAccepted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Accepted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_37_listener() { return ctx.GetInProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " In Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_49_listener() { return ctx.GetRejected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_55_listener() { return ctx.GetNotStarted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Not Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectAssignTaskComponent_Template_input_ngModelChange_65_listener($event) { return ctx._AssignTaskSearch = $event; })("input", function ProjectAssignTaskComponent_Template_input_input_65_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Filtered : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ProjectAssignTaskComponent_li_73_Template, 16, 11, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Select the project from left panel to display result here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_button_click_85_listener() { return ctx.moreDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_button_click_87_listener() { return ctx.ProjectInfoDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_button_click_89_listener() { return ctx.ShowForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](117, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, ProjectAssignTaskComponent_span_120_Template, 2, 1, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, ProjectAssignTaskComponent_span_121_Template, 2, 1, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](135, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](136, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_140_listener() { return ctx.LoadDocument(ctx.Reference); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h4", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "EP Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, ProjectAssignTaskComponent_div_150_Template, 9, 1, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectAssignTaskComponent_Template_input_ngModelChange_157_listener($event) { return ctx._Demotext = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h5", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h5", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "button", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.FilteredText, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countAssigned);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countInprocess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countRejected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countNotStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._AssignTaskSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.FilteredText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Assigntask_List);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.paragraph_msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.NotfoundAssignedTask, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.Div_TaskDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.ProjectCode == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Task_Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Task_Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ProjectType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](46, _c0, ctx.Status == "Accepted", ctx.Status == "Pending", ctx.Status == "Rejected"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](112, 34, ctx.Start_Date, "dd-MM-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](117, 37, ctx.End_Date, "dd-MM-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SubmissionType == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SubmissionType != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By: ", ctx.AssignedBy, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("To : ", ctx.Employee, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("On : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](135, 40, ctx.ModifyDate, "dd-MM-yyyy"), " \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](136, 43, ctx.ModifyDate, "h:mm a"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.FileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Remarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx._DemoVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx._DemoVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.DemoTasksList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx._DemoVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._Demotext);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".sidebar[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n    background-color: #fff;\r\n    \r\n}\r\n\r\n.scrollbar[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 160px);\r\n    overflow-y: auto;\r\n}\r\n\r\n.scrollbar-rt[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 99px);\r\n    overflow-y: auto;\r\n}\r\n\r\n.card.border-left-0[_ngcontent-%COMP%] {\r\n    border-radius: 0px 0.25rem 0.25rem 0px;\r\n}\r\n\r\n.brdr-r-0[_ngcontent-%COMP%] {\r\n    border-radius: 0.25rem 0px 0px 0.25rem;\r\n}\r\n\r\n.kt-widget19__stats[_ngcontent-%COMP%] {\r\n    margin-bottom: 0.7rem;\r\n}\r\n\r\n.cust-btn[_ngcontent-%COMP%] {\r\n    padding: 3px 7px;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    transition: transform .2s!important;\r\n    transform: scale(.95);\r\n    background: #f0f8ff;\r\n}\r\n\r\n#rightbar-overlay[_ngcontent-%COMP%] {\r\n    background-color: rgba(50, 58, 70, .2);\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    display: none;\r\n    z-index: 998;\r\n    transition: all .2s ease-out;\r\n}\r\n\r\n.pl-15px[_ngcontent-%COMP%]{\r\n        padding-left: 15px;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #ccc;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: black;\r\n    padding: 10px 16px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: #e0e0e0;\r\n    color: rgb(48, 46, 46);\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\r\n    background-color: #f4f4f4;\r\n    color: rgb(48, 46, 46);\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\r\n    color: #3c3c3c;\r\n    font-weight: 500;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #484848;\r\n}\r\n\r\ndiv.content[_ngcontent-%COMP%] {\r\n    margin-left: 200px;\r\n    padding: 1px 16px;\r\n    height: 1000px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: auto;\r\n        position: relative;\r\n    }\r\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        float: left;\r\n    }\r\n    div.content[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        float: none;\r\n    }\r\n}\r\n\r\n\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\r\n\r\n.project-info-page[_ngcontent-%COMP%] {\r\n    letter-spacing: 0.4px;\r\n}\r\n\r\n.project-description[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #969696;\r\n    font-size: 13px;\r\n}\r\n\r\n.project-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #646464;\r\n    \r\n}\r\n\r\n.project-budget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .project-duration[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    color: #969696;\r\n}\r\n\r\n.project-duration-bar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n  .dropdown-list {\r\n    overflow: overlay;\r\n}\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #ffffff;\r\n    border-left: 1px solid #b3bcff;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    \r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n    background-color: #f5f6fc;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #333;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 25px;\r\n    font-size: 20px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.info-icon-cir[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #5867dd;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed #dedede;\r\n    padding: 6px;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding-left: 0px !important;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #f1f1f1;\r\n    font-weight: 400;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-bottom: 1px solid #f1f1f1;\r\n    padding: 7px 0 5px;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.subtask-radio[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 15px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]   p.subtask-list-title[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}\r\n\r\n#accordionExample5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    margin-top: 15px;\r\n}\r\n\r\n.accordion.accordion-svg-icon[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-child   .card-body[_ngcontent-%COMP%] {\r\n    padding-left: 0px;\r\n}\r\n\r\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:after {\r\n    left: 0px !important;\r\n    font-weight: 600;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    font-size: 16px;\r\n}\r\n\r\n.text-Rejected[_ngcontent-%COMP%] {\r\n    color: #E6747A !important;\r\n}\r\n\r\n.text-underApproval[_ngcontent-%COMP%] {\r\n    color: #98c7bf !important;\r\n}\r\n\r\n.text-CompleteRejected[_ngcontent-%COMP%] {\r\n    color: #D83C3C !important;\r\n}\r\n\r\n.text-underApp[_ngcontent-%COMP%] {\r\n    color: #702c72e7 !important;\r\n}\r\n\r\n.text-Todo[_ngcontent-%COMP%] {\r\n    color: #45F495 !important;\r\n}\r\n\r\n.text-Completed[_ngcontent-%COMP%] {\r\n    color: #41D37B !important;\r\n}\r\n\r\ninput.largerCheckbox[_ngcontent-%COMP%] {\r\n    width: 13px;\r\n    height: 13px;\r\n}\r\n\r\n.textarea[_ngcontent-%COMP%] {\r\n    height: 381px;\r\n}\r\n\r\n.kt-checkbox[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    margin-bottom: inherit;\r\n}\r\n\r\n.assigned_task[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    padding: 10px;\r\n    box-shadow: 0 0 5px #ccc;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.assigned_task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    font-weight: 500;\r\n}\r\n\r\n.assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .add_assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    margin-right: 8px;\r\n    color: #646c9a;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%], .add_assign_task_input[_ngcontent-%COMP%] {\r\n    padding: 0.65rem 0.5rem;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: stretch;\r\n    width: 100% !important;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\n    transition: transform .2s !important;\r\n}\r\n\r\n.add_assigned_task[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 8px;\r\n    right: 8px;\r\n}\r\n\r\n.add_assign_task_input[_ngcontent-%COMP%] {\r\n    height: calc(1.5em + 1.3rem + 8px);\r\n}\r\n\r\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   span.input-group-text[_ngcontent-%COMP%] {\r\n    padding-left: 2px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    margin-right: 0px;\r\n}\r\n\r\n.curser-pointer[_ngcontent-%COMP%] {\r\n    counter: pointer;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding-left: 0px;\r\n}\r\n\r\n.scrollbar[_ngcontent-%COMP%]   .assigned_task[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.project-active[_ngcontent-%COMP%] {\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.kt-widget12[_ngcontent-%COMP%]   .kt-widget12__content[_ngcontent-%COMP%]   .kt-widget12__item[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.kt-widget19__stats[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX0xheW91dERhc2hib2FyZC9wcm9qZWN0LWFzc2lnbi10YXNrL3Byb2plY3QtYXNzaWduLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBQ0E7UUFDUSxrQkFBa0I7QUFDMUI7O0FBRUEsVUFBVTs7QUFFVjtJQUNJLFVBQVU7QUFDZDs7QUFHQSxVQUFVOztBQUVWO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUdBLFdBQVc7O0FBRVg7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUdBLG9CQUFvQjs7QUFFcEI7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7QUFDSjs7QUFHQSxnQ0FBZ0M7O0FBRWhDO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQSxvQkFBb0I7O0FBRXBCO0lBQ0ksWUFBWTtJQUNaLFFBQVE7SUFDUixlQUFlO0lBQ2YsWUFBWTtJQUNaLE1BQU07SUFDTixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBR0E7O0tBRUs7O0FBRUw7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL19MYXlvdXREYXNoYm9hcmQvcHJvamVjdC1hc3NpZ24tdGFzay9wcm9qZWN0LWFzc2lnbi10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLyogd2lkdGg6IDMwMHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxufVxyXG5cclxuLnNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLXJ0IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk5cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmNhcmQuYm9yZGVyLWxlZnQtMCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMC4yNXJlbSAwLjI1cmVtIDBweDtcclxufVxyXG5cclxuLmJyZHItci0wIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMHB4IDBweCAwLjI1cmVtO1xyXG59XHJcblxyXG4ua3Qtd2lkZ2V0MTlfX3N0YXRzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcclxufVxyXG5cclxuLmN1c3QtYnRuIHtcclxuICAgIHBhZGRpbmc6IDNweCA3cHg7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1ib3ggbGk6aG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmOGZmO1xyXG59XHJcblxyXG4jcmlnaHRiYXItb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1OCwgNzAsIC4yKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiA5OTg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcbi5wbC0xNXB4e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLyogd2lkdGggKi9cclxuXHJcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcblxyXG4vKiBUcmFjayAqL1xyXG5cclxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuXHJcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICBjb2xvcjogcmdiKDQ4LCA0NiwgNDYpO1xyXG59XHJcblxyXG4uc2lkZWJhciBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgY29sb3I6IHJnYig0OCwgNDYsIDQ2KTtcclxufVxyXG5cclxuLnNpZGViYXIgLnByb2plY3QtdGl0bGUge1xyXG4gICAgY29sb3I6ICMzYzNjM2M7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc2lkZWJhciAuZC1mbGV4IHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM0ODQ4NDg7XHJcbn1cclxuXHJcbmRpdi5jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDFweCAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyIGEge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgZGl2LmNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLnNpZGViYXIgYSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogTW9yZSBEZXRhaWxzIENvbXBvbmVudHMgQ1NTICovXHJcblxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnByb2plY3QtaW5mby1wYWdlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb24gLmQtZmxleCBzcGFuIHtcclxuICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXNjcmlwdGlvbiBwIHtcclxuICAgIGNvbG9yOiAjNjQ2NDY0O1xyXG4gICAgLyogZm9udC1zaXplOiAxNHB4OyAqL1xyXG59XHJcblxyXG4ucHJvamVjdC1idWRnZXQgaDYsXHJcbi5wcm9qZWN0LWR1cmF0aW9uIGg2IHtcclxuICAgIGNvbG9yOiAjOTY5Njk2O1xyXG59XHJcblxyXG4ucHJvamVjdC1kdXJhdGlvbi1iYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHJvcGRvd24tbGlzdCB7XHJcbiAgICBvdmVyZmxvdzogb3ZlcmxheTtcclxufVxyXG5cclxuXHJcbi8qID09PSBTaWRlYmFyID09PSAqL1xyXG5cclxuLnNpZGVJbmZvYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIC8qIHBhZGRpbmctdG9wOiA2MHB4OyAqL1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXBvcnRsZXRfX2hlYWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5jbG9zZWJ0biB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWljb24tY2lyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNTg2N2RkO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtLmRhcmsge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG5cclxuLyogLmt0LWluYm94X19kYXRldGltZXtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSAua3Qtd2lkZ2V0MV9faW5mbyAua3Qtd2lkZ2V0MV9fdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC50aXRsZS1zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uc2lkZS1iYXItYm94IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1ib3ggbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc2lkZS1iYXItYm94IGxpOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZVxyXG59XHJcblxyXG4uc3VidGFzay1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgIHBhZGRpbmc6IDdweCAwIDVweDtcclxufVxyXG5cclxuLnN1YnRhc2stbGlzdDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5zdWJ0YXNrLXJhZGlvIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uc3VidGFzay1saXN0IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnN1YnRhc2stbGlzdCBwLnN1YnRhc2stbGlzdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4jYWNjb3JkaW9uRXhhbXBsZTUgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLmFjY29yZGlvbi1zdmctaWNvbiAuY2FyZDpsYXN0LWNoaWxkIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24uYWNjb3JkaW9uLWxpZ2h0IC5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZTphZnRlciB7XHJcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmFjY29yZGlvbi5hY2NvcmRpb24tbGlnaHQgLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRleHQtUmVqZWN0ZWQge1xyXG4gICAgY29sb3I6ICNFNjc0N0EgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtdW5kZXJBcHByb3ZhbCB7XHJcbiAgICBjb2xvcjogIzk4YzdiZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1Db21wbGV0ZVJlamVjdGVkIHtcclxuICAgIGNvbG9yOiAjRDgzQzNDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXVuZGVyQXBwIHtcclxuICAgIGNvbG9yOiAjNzAyYzcyZTcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtVG9kbyB7XHJcbiAgICBjb2xvcjogIzQ1RjQ5NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1Db21wbGV0ZWQge1xyXG4gICAgY29sb3I6ICM0MUQzN0IgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQubGFyZ2VyQ2hlY2tib3gge1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbn1cclxuXHJcbi50ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDM4MXB4O1xyXG59XHJcblxyXG4ua3QtY2hlY2tib3gge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogaW5oZXJpdDtcclxufVxyXG5cclxuLmFzc2lnbmVkX3Rhc2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYXNzaWduZWRfdGFzayBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5hc3NpZ25lZF90YXNrIGksXHJcbi5hZGRfYXNzaWduZWRfdGFzayBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGNvbG9yOiAjNjQ2YzlhO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCxcclxuLmFkZF9hc3NpZ25fdGFza19pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAwLjY1cmVtIDAuNXJlbTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hZGRfYXNzaWduZWRfdGFzayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5hZGRfYXNzaWduX3Rhc2tfaW5wdXQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMS4zcmVtICsgOHB4KTtcclxufVxyXG5cclxuLmFkZF9hc3NpZ25lZF90YXNrIC5pbnB1dC1ncm91cC1hcHBlbmQgc3Bhbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYWRkX2Fzc2lnbmVkX3Rhc2sgLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmN1cnNlci1wb2ludGVyIHtcclxuICAgIGNvdW50ZXI6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyIC5hc3NpZ25lZF90YXNrOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnByb2plY3QtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5rdC13aWRnZXQxMiAua3Qtd2lkZ2V0MTJfX2NvbnRlbnQgLmt0LXdpZGdldDEyX19pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLmt0LXdpZGdldDE5X19zdGF0cyAuZHJvcGRvd24taXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectAssignTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-assign-task',
                templateUrl: './project-assign-task.component.html',
                styleUrls: ['./project-assign-task.component.css']
            }]
    }], function () { return [{ type: src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_3__["ProjectTypeService"] }, { type: src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_8__["BsServiceService"] }]; }, { min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/_LayoutDashboard/project-assign-task/project-assign-task.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-assign-task/project-assign-task.module.ts ***!
  \************************************************************************************/
/*! exports provided: ProjectAssignTaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAssignTaskModule", function() { return ProjectAssignTaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _project_assign_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-assign-task.component */ "./src/app/_LayoutDashboard/project-assign-task/project-assign-task.component.ts");
/* harmony import */ var _project_assign_task_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-assign-task-routing.module */ "./src/app/_LayoutDashboard/project-assign-task/project-assign-task-routing.module.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");










//import {MatAutocompleteModule} from '@angular/material/autocomplete';
class ProjectAssignTaskModule {
}
ProjectAssignTaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectAssignTaskModule });
ProjectAssignTaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectAssignTaskModule_Factory(t) { return new (t || ProjectAssignTaskModule)(); }, imports: [[
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _project_assign_task_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProjectAssignTaskRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectAssignTaskModule, { declarations: [_project_assign_task_component__WEBPACK_IMPORTED_MODULE_3__["ProjectAssignTaskComponent"]], imports: [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _project_assign_task_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProjectAssignTaskRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectAssignTaskModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _project_assign_task_component__WEBPACK_IMPORTED_MODULE_3__["ProjectAssignTaskComponent"]
                ],
                imports: [
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"].forRoot(),
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                    _project_assign_task_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProjectAssignTaskRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=_LayoutDashboard-project-assign-task-project-assign-task-module.js.map