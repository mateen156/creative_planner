import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectUnplannedTaskComponent } from "./project-unplanned-task.component";
import { ProjectUnplannedTaskRoutingModule } from './project-unplanned-task-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TaskDateAgoPipe } from './task-date-ago.pipe';
import { NotificationService } from 'src/app/_Services/notification.service';
//import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-';
@NgModule({
  declarations: [
    ProjectUnplannedTaskComponent,
    TaskDateAgoPipe,
    //MatMomentDateModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectUnplannedTaskRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatSelectModule,
    NgMultiSelectDropDownModule
  ],
  exports:[
    ProjectUnplannedTaskComponent
  ],
    providers: [ 
      NotificationService
  ] 
})
export class ProjectUnplannedTaskModule { }
