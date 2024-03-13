import { createFeatureSelector, createReducer, createSelector } from '@ngrx/store';
import { AppConnectState } from 'src/app/common/store/state/app-state';
import { ProjectComponentModel } from '../../components/project/project.model';
import { ProjectState } from '../state/project.state';

//export const counterFeature1 = (state: AppState) => state.counter;
//export const ProjectSelector = (state: AppConnectState) => state.ProjectDetails;
export const ProjectSelector = createFeatureSelector<ProjectState[]>('ProjectDetails');

export const  ProjectDetailsSelector= createSelector(ProjectSelector ,(state: ProjectState[]) => {
    console.log(state);
    return ProjectComponentModel.Create(state);
});