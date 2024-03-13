import { Store } from '@ngrx/store';
import {
  CreatProjectAction,
  DeleteProjectAction,
  GetAllProjectAction,
  GetProjectByIdAction,
  GetProjectCountAction,
  SoftDeleteProjectAction,
  UpdateProjectAction,
} from './store/actions/project.action';
import {
  CreateNewProject,
  UpdateProjectDetails,
} from './helper/project-helper';
import { EMPTY, Observable, map, tap } from 'rxjs';
import { ProjectComponentModel } from './components/project/project.model';
import { ProjectDetailsSelector } from './store/selectors/project.selector';
import { ProjectState } from './store/state/project.state';
import { AppConnectState } from '../common/store/state/app-state';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectFacade {
  constructor(private store$: Store) {
    this.projectComponentModel$ = this.store$.select(ProjectDetailsSelector);
    this.projectComponentModel$
    .subscribe((x=> console.log('Facade', x))); 
  }

  projectComponentModel$: Observable<ProjectComponentModel[]>

  GetAllProject(): void {
    this.store$.dispatch(GetAllProjectAction());
  }

  GetProjectById(projectId: number): void {
    this.store$.dispatch(GetProjectByIdAction({ Id: projectId }));
  }

  GetProjectCount(): void {
    this.store$.dispatch(GetProjectCountAction());
  }

  CreateProject(): void {
    const projectObject = CreateNewProject();
    console.log('project-fact', projectObject);
    this.store$.dispatch(CreatProjectAction({ projectEntity: projectObject }));
  }

  UpdateProject(projectId: number, projectName: string): void {
    const updatedProject = UpdateProjectDetails(projectId, projectName);
    this.store$.dispatch(
      UpdateProjectAction({ projectEntity: updatedProject })
    );
  }

  DeleteProject(projectId: number): void {
    this.store$.dispatch(DeleteProjectAction({ Id: projectId }));
  }

  SoftDeleteProject(projectId: number): void {
    this.store$.dispatch(SoftDeleteProjectAction({ Id: projectId }));
  }
}
