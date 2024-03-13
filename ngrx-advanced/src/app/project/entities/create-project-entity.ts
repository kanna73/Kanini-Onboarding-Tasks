export interface CreateProjectEntity {
  Id: number;
  Name: string;
  CreatedBy: string;
  CreatedDate: Date;
  UpdatedBy: string | null;
  UpdatedDate: Date | null;
  DeletedBy: string | null;
  DeleteDate: Date | null;
  IsActive: boolean;
}
