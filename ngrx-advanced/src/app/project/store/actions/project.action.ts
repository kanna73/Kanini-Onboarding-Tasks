import { createAction, props } from '@ngrx/store';
import { CreateProjectEntity } from '../../entities/create-project-entity';
import { updateProjectEntity } from '../../entities/update-project-entity';

enum ProjectActions {
  CreateProject = '[Project] Create Project',
  UpdateProject = '[Project] Update Project',
  DeleteProject = '[Project] Delete Project',
  SoftDeleteProject = '[Project] Soft Delete Project',
  GetAllProject = '[Project] Get All Projects',
  GetProjectById = '[Project] Get Project By Id',
  GetProjectCount = '[Project] Get Project Count',
}

export const CreatProjectAction = createAction(
  ProjectActions.CreateProject,
  props<{ projectEntity: CreateProjectEntity }>()
);

export const UpdateProjectAction = createAction(
  ProjectActions.UpdateProject,
  props<{ projectEntity: updateProjectEntity }>()
);

export const DeleteProjectAction = createAction(
  ProjectActions.DeleteProject,
  props<{ Id: number }>()
);

export const GetAllProjectAction = createAction(ProjectActions.GetAllProject);

export const GetProjectByIdAction = createAction(
  ProjectActions.GetProjectById,
  props<{ Id: number }>()
);

export const GetProjectCountAction = createAction(
  ProjectActions.GetProjectCount
);

export const SoftDeleteProjectAction = createAction(
  ProjectActions.SoftDeleteProject,
  props<{ Id: number }>()
);