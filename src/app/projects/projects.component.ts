import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProjectData } from '../models/projectData';
import * as moment from 'moment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  title: string;
  startDate: Date;
  endDate: Date;
  projectList: Array<ProjectData> = [];
  moment: any = moment;
  displayedColumns: string[] = ['title', 'startDate', 'endDate', 'delete'];

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '500px',
      data: { title: this.title, startDate: this.startDate, endDate: this.endDate }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projectList.push(result);
        this.projectList = [...this.projectList];
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
      }
    });
  }


  ngOnInit() {
    const storageList = localStorage.getItem('projectList');
    if (storageList) {
      this.projectList = JSON.parse(storageList);
      // console.log(this.projectList);
    }
  }

  deleteProject(index) {
    if (this.projectList && this.projectList[index]) {
      this.projectList.splice(index, 1);
      this.projectList = [...this.projectList];
      localStorage.setItem('projectList', JSON.stringify(this.projectList));
    }
  }

}
