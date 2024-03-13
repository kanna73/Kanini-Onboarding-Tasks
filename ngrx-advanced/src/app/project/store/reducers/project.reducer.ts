import { createActionGroup, createReducer, on } from '@ngrx/store';
import { ProjectState } from '../state/project.state';
import {
  CreatProjectAction,
  DeleteProjectAction,
  GetAllProjectAction,
  GetProjectByIdAction,
  GetProjectCountAction,
  SoftDeleteProjectAction,
  UpdateProjectAction,
} from '../actions/project.action';

const projectInitialState: ProjectState[] = [
  {
    Id: 1,
    Name: 'Test',
    UpdatedBy: null,
    UpdatedDate: null,
    DeleteDate: null,
    DeletedBy: null,
    CreatedBy: 'createdBy',
    CreatedDate: new Date(),
    IsActive: true,
  },
];
export const projectReducer = createReducer(
  projectInitialState,

  on(GetAllProjectAction, (state) => {
    return state;
  }),

  on(GetProjectByIdAction, (state, { Id }) => {
    return state.filter((project) => project.Id === Id);
  }),

  on(GetProjectCountAction, (state) => {
    return state;
  }),

  on(CreatProjectAction, (state, { projectEntity }) => {
    const isExists: boolean = state.some(
      (project) => project.Id === projectEntity.Id
    );
    if (isExists) return state;
    return [...state, projectEntity];
  }),

  on(UpdateProjectAction, (state, { projectEntity }) => {
    const index: number = state.findIndex(
      (project: ProjectState) => project.Id === projectEntity.Id
    );
    if (index !== -1) {
      const updatedProject = {
        ...state[index], // Spread to clone the original project object
        Name: projectEntity.Name,
        UpdatedBy: projectEntity.UpdatedBy,
        UpdatedDate: projectEntity.UpdatedDate,
      };
      const clonedState = [...state]; // Clone the state array
      clonedState[index] = updatedProject; // Replace the old project with the updated one
      return clonedState;
    }
    return state;
  }),
  on(DeleteProjectAction, (state, { Id }) => {
    const filteredProjects: Array<ProjectState> = state.filter((project) => project.Id !=Id);
    if (filteredProjects) {
      return filteredProjects;
    }
    return state; // Return the modified state
}),
on(SoftDeleteProjectAction, (state, { Id }) => {
    const index: number = state.findIndex(
      (project: ProjectState) => project.Id === Id
    );
    if (index !== -1) {
      const updatedProject = {
        ...state[index], // Spread to clone the original project object
        IsActive: false ,
      };
      const clonedState = [...state]; // Clone the state array
      clonedState[index] = updatedProject; // Replace the old project with the updated one
      return clonedState;
    }
    return state;
  }),
);
