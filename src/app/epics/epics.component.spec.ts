import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';

import { EpicsComponent } from './epics.component';

describe('EpicsComponent', () => {
  let component: EpicsComponent;
  let fixture: ComponentFixture<EpicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EpicsComponent],
      imports: [MaterialModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('project list should be defined', () => {
    expect(component.projectList).toBeDefined();
  });
  it('priority list should be defined', () => {
    expect(component.priorityList).toBeDefined();
  });
  it('should show success message on Save', () => {
    spyOn(component, 'openSnackBar');
    component.saveEpicDetails();
    expect(component.openSnackBar).toHaveBeenCalled();
  });
});
