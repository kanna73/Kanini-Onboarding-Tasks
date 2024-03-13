import { ProjectState } from '../../store/state/project.state';

export class ProjectComponentModel {
  Id!: number;
  Name!: string;
  CreatedBy!: string;
  CreatedDate!: Date;
  UpdatedBy!: string | null;
  UpdatedDate!: Date | null;
  DeletedBy!: string | null;
  DeleteDate!: Date | null;
  IsActive!: boolean;

  public static Create(projectsState: ProjectState[]): ProjectComponentModel[] {
    if (projectsState) {
      return projectsState.map((project) => {
        const model = new ProjectComponentModel();
        model.CreatedBy = project.CreatedBy;
        model.CreatedDate = project.CreatedDate;
        model.DeleteDate = project.DeleteDate;
        model.DeletedBy = project.DeletedBy;
        model.Id = project.Id;
        model.IsActive = project.IsActive;
        model.Name = project.Name;
        model.UpdatedDate = project.UpdatedDate;
        model.UpdatedBy = project.UpdatedBy;
        return model;
      });
    }
    return [];
  }
}
