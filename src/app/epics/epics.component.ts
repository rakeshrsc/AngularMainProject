import { Component, OnInit } from '@angular/core';
import { ProjectData } from '../models/projectData';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-epics',
  templateUrl: './epics.component.html',
  styleUrls: ['./epics.component.scss']
})
export class EpicsComponent implements OnInit {

  projectList: Array<ProjectData> = [];
  priorityList: number[] = [1, 2, 3, 4, 5];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const storageList = localStorage.getItem('projectList');
    if (storageList) {
      this.projectList = JSON.parse(storageList);
    }
  }

  addNewEpic(index) {
    if (this.projectList && this.projectList[index]) {
      const epicList = this.projectList[index].epics || [];
      epicList.push({
        name: '',
        priority: 0
      });
      this.projectList[index].epics = [...epicList];
    }
  }

  saveEpicDetails() {
    localStorage.setItem('projectList', JSON.stringify(this.projectList));
    this.openSnackBar('Sucessfully added', 'Close');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  deleteEpic(projectIdx, epicIdx) {
    if (this.projectList && this.projectList[projectIdx] &&
      this.projectList[projectIdx].epics && this.projectList[projectIdx].epics[epicIdx]) {
      this.projectList[projectIdx].epics.splice(epicIdx, 1);
      this.projectList = [...this.projectList];
    }
  }

}
