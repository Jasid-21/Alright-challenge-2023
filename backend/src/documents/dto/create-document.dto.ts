import { DocStatus } from 'src/helpers/types';

export class CreateDocumentDto {
  name: string;
  filePath: string;
  owner: number;
  status: DocStatus;
}
