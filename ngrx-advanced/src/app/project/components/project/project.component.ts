import { Component, OnInit } from '@angular/core';
import { ProjectFacade } from '../../project.facade';
import { ProjectComponentModel } from './project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  constructor(private projectFacade: ProjectFacade) {}

  project$: Observable<ProjectComponentModel[]> | undefined;

  ngOnInit(): void {
    this.project$ = this.projectFacade.projectComponentModel$;
  }

  OnGetAllProject(): void {
    this.projectFacade.GetAllProject();
  }

  OnGetProjectById(projectId: number): void {
    this.projectFacade.GetProjectById(projectId);
  }

  OnGetProjectCount(): void {
    this.projectFacade.GetProjectCount();
  }

  OnCreateProject(): void {
    this.projectFacade.CreateProject();
  }

  OnUpdateProject(projectId: number, projectName: string): void {
    this.projectFacade.UpdateProject(projectId, projectName);
  }

  OnDeleteProject(projectId: number): void {
    this.projectFacade.DeleteProject(projectId);
  }

  OnSoftDeleteProject(projectId: number): void {
    this.projectFacade.SoftDeleteProject(projectId);
  }
}
