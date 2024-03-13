import { getRandomInt } from 'src/app/common/helper/RandomNumberHelper';
import { CreateProjectEntity } from '../entities/create-project-entity';
import { updateProjectEntity } from '../entities/update-project-entity';

export function CreateNewProject(): CreateProjectEntity {
  const randomNumber: number = getRandomInt(1, 100);
  const project = {
    Id: randomNumber,
    Name: `Create Project ${randomNumber}`,
    CreatedBy: `CreateBy ${randomNumber}`,
    CreatedDate: new Date(),
    UpdatedBy: null,
    UpdatedDate: null,
    DeletedBy: null,
    DeleteDate: null,
    IsActive: true,
  };
  return project;
}

export function UpdateProjectDetails(projectId: number, projectName: string) : updateProjectEntity {
  const randomNumber: number = getRandomInt(1, 100);
  const updatedProject = {
    Id: projectId,
    Name: projectName,
    UpdatedBy: `UpdatedBy ${randomNumber}`,
    UpdatedDate: new Date(),
  };
  return updatedProject;
}
