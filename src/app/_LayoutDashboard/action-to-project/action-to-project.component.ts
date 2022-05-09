
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { BsServiceService } from 'src/app/_Services/bs-service.service'
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';

@Component({
  selector: 'app-action-to-project',
  templateUrl: './action-to-project.component.html',
  styleUrls: ['./action-to-project.component.css']
})
export class ActionToProjectComponent implements OnInit {
  Sub_ProjectName: string;
  _Description: string;
  _StartDate: Date;
  _EndDate: Date;
  _remarks: string;
  _inputAttachments: any = [];
  _inputAttachments2: any;
  selectedEmpNo: string = null;
  _MainPrjectName: string = null;
  //selected_Employee: any[];
  dropdownSettings_EMP = {};
  disablePreviousDate = new Date();
  public task_id: number = null;
  public _taskName: string;
  ProjectsDropdownBoolean: boolean = false;
  ObjSubTaskDTO: SubTaskDTO;
  _MasterCode: string = null;
  ProjectBlock: string = null;
  selectedFile: any = null;
  dropdownSettings_Projects = {};
  ObjUserDetails: UserDetailsDTO;
  public filterText: any;
  _ProjectDataList: any;

  constructor(public service: ProjectTypeService,
    private notifyService: NotificationService,
    private router: Router,
    private BsService: BsServiceService
  ) {
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    this.ObjSubTaskDTO = new SubTaskDTO;
    this.ObjUserDetails = new UserDetailsDTO();
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());

    this.BsService.bs_projectCode.subscribe(p => {
      if (p == null) {
        this.ProjectsDropdownBoolean = false;
        this.GetProjectsByUserName();
        this._MasterCode = null;
      }
      else {
        this._MasterCode = p;
        this.ProjectsDropdownBoolean = true;
      }
    });
    this.BsService.bs_ProjectName.subscribe(N => this._MainPrjectName = N);
    this.BsService.bs_AssignId.subscribe(id => this.task_id = id);
    this.BsService.bs_TaskName.subscribe(t => {
      this.Sub_ProjectName = t
    });
    this._inputAttachments=[];
  }

  ngOnInit() {
    this.GetAllEmployeesForAssignDropdown();
  }

  CurrentUser_ID: string;
  _EmployeeListForDropdown = [];
  selectedProjectCodelist = [];

  GetAllEmployeesForAssignDropdown() {

    let obj: any = {
      pagenumber: 1,
      Emp_No: this.CurrentUser_ID,
      Mode: 'AssignedTask'
    }

    this.service._GetCompletedProjects(obj).subscribe(
      (data) => {
        this._EmployeeListForDropdown = JSON.parse(data[0]['EmployeeList']);
        //console.log(this.EmployeeList);
        this.dropdownSettings_EMP = {
          searchAutofocus: true,
          singleSelection: true,
          idField: 'Emp_No',
          textField: 'DisplayName',
          itemsShowLimit: 2,
          allowSearchFilter: true,
          closeDropDownOnSelection: true,
        };
      });
  }
  
  onFilterChange(event) {
    this.filterText = event
    this.GetProjectsByUserName();
  }
  selectedProjectCode: string;
  ProjectOnSelect(obj) {

    this.selectedProjectCode = obj['Project_Code'];

  }
  ProjectOnDeselect(obj) {
    this.selectedProjectCode = "";
  }
  GetProjectsByUserName() {
    // this.LoadingBar.start();
    this.ObjUserDetails.PageNumber = 1;
    this.ObjUserDetails.PageSize = 30;
    this.ObjUserDetails.SearchText = this.filterText;
    this.service.GetProjectsForRunwayTaskDropdown(this.ObjUserDetails).subscribe(data => {
      this._ProjectDataList = JSON.parse(data[0]['DropdownProjects_Json']);

      this.dropdownSettings_Projects = {
        singleSelection: true,
        idField: 'Project_Code',
        textField: 'Project_Name',
        itemsShowLimit: 1,
        allowSearchFilter: true,
        closeDropDownOnSelection: true,
        clearSearchFilter: true,
        searchPlaceholderText: "Search by project name",
        maxHeight: "500px",
        allowRemoteDataSearch: true,
        noDataAvailablePlaceholderText: 'Please wait..'

      };
      // console.log("Project List for Dropdown...",this._ProjectDataList);
    });
  }
  
  onFileChange(e) {
    this._inputAttachments = [...this._inputAttachments, {
      FileName: e.target.files[0].name,
      Size: e.target.files[0].size,
      Files: e.target.files[0]
    }];
  }
  selected_Employee = [];
  EmployeeOnSelect(obj) {
    this.selectedEmpNo = obj['Emp_No'];
    //alert(this.selectedEmpNo);
  }
  EmployeeOnDeselect(obj) {
    this.selectedEmpNo = null;
  }
  Sub_ProjectCode: any;
  EmpNo_Autho: any;


  OnSubmit() {
    
    if (this.Sub_ProjectName == "" || this._StartDate == null || this._EndDate == null) {
      this.notifyService.showInfo("", 'Star(*) mark feilds required ')
    }
    else {
      if (this._MasterCode == null) {
        this.ObjSubTaskDTO.MasterCode = this.selectedProjectCode;
        this._MasterCode = this.selectedProjectCode;
      }
      else {
        this.ObjSubTaskDTO.MasterCode = this._MasterCode;
      }
      this.service._GetNewProjectCode(this.ObjSubTaskDTO).subscribe(data => {
        debugger
        
        this.Sub_ProjectCode = data['SubTask_ProjectCode'];
        this.EmpNo_Autho = data['Team_Autho'];

        this.ProjectBlock = data['ProjectBlock'];


        if (this.task_id != null) {
          this.ObjSubTaskDTO.AssignId = this.task_id;
        }
        else {
          this.task_id = 0;
        }
        this.ObjSubTaskDTO.SubProject_Name = this.Sub_ProjectName;
        this.ObjSubTaskDTO.SubtaskDescription = this._Description;
        this.ObjSubTaskDTO.ProjectBlock = this.ProjectBlock;

        this.ObjSubTaskDTO.StartDate = this._StartDate;

        this.ObjSubTaskDTO.SubProject_DeadLine = this._EndDate;
        var Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        this.ObjSubTaskDTO.Duration = (-Difference_In_Days);
        this.ObjSubTaskDTO.Duration = this.ObjSubTaskDTO.Duration * 8 / 1;
        //If we are using 8 hours format then divide by 3 for HourDifference.
        this.ObjSubTaskDTO.Emp_No = this.CurrentUser_ID;
        this.ObjSubTaskDTO.AssignTo = this.selectedEmpNo;
        this.ObjSubTaskDTO.Remarks = this._remarks;
        // this.ObjSubTaskDTO.Attachments = this._inputAttachments;
        if(this._inputAttachments.length>0){
          this.ObjSubTaskDTO.Attachments = this._inputAttachments[0].Files;
        }
        var datestrStart = (new Date(this._StartDate)).toUTCString();
        var datestrEnd = (new Date(this._EndDate)).toUTCString();
        

        const fd = new FormData();
        fd.append("Project_Code", this.Sub_ProjectCode);
        fd.append("Team_Autho", this.EmpNo_Autho);
        // fd.append('file', this._inputAttachments[0].Files);
        if (this._inputAttachments.length > 0) {
          fd.append("Attachment","true");
          fd.append('file', this._inputAttachments[0].Files);
        }
        else{
          fd.append("Attachment","false");
          fd.append('file', "");
        }
        fd.append("_MasterCode", this.ObjSubTaskDTO.MasterCode);
        fd.append("SubtaskName", this.Sub_ProjectName);
        fd.append("Desc", this._Description);
        fd.append("Projectblock", this.ProjectBlock);
        fd.append("StartDate", datestrStart);
        fd.append("EndDate", datestrEnd);
        fd.append("Duration", this.ObjSubTaskDTO.Duration.toString());
        fd.append("Emp_No", this.CurrentUser_ID);
        fd.append("AssignTo", this.selectedEmpNo);
        fd.append("Remarks", this._remarks);
        fd.append("EmployeeName", localStorage.getItem('UserfullName'))
        fd.append("AssignId", this.task_id.toString())
        this.service._InsertNewSubtask(fd).subscribe(data => {
        });
        this.notifyService.showInfo("Created Successfully", "Action");
        this.closeInfo();
      });
    }
  }

  closeInfo() {
    document.getElementById("mysideInfobar").style.width = "0";
    this.Clear_Feilds();
  }
  Clear_Feilds() {
    this.Sub_ProjectName = "";
    this._Description = "";
    this._StartDate = null;
    this._EndDate = null;
    this._remarks = "";
    this._inputAttachments = null;
    this._inputAttachments2 = null;
    this.selectedEmpNo = '';
    this.selected_Employee = [];
  }

}
