import * as appRootPath from 'app-root-path';
import { createWriteStream } from 'fs';
import { join } from 'path';

export function randomCode(num: number): string {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = lower.toUpperCase();
  const numbers = '0123456789';
  const total = lower + upper + numbers;

  let code = '';
  for (let i = 0; i < num; i++) {
    code += total[Math.floor(Math.random() * (total.length - 1))];
  }

  return code;
}

export function getNewDocPath(file: Express.Multer.File): string {
  const root = appRootPath.path;
  const docName = randomCode(5) + '.' + file.originalname;
  const filePath = join(root, 'src', 'uploads', docName);
  const writeStream = createWriteStream(filePath);
  writeStream.write(file.buffer);

  return filePath;
}
