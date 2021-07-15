import dirTree from 'directory-tree';
import fse, { pathExists } from 'fs-extra';
import fs from 'fs';

const fsp = fs.promises;

class File {
  path?: string;

  constructor(p?: string) {
    if (p) {
      this.path = p;
    }
  }

  readStructure(p: string, options?: object): object {
    return dirTree(p, options);
  }

  async readFile(p: string): Promise<string> {
    const file = await fsp.readFile(p, 'utf-8');
    return file;
  }

  private async isExist(p: string): Promise<boolean> {
    const exist = await fse.pathExists(p);
    return exist;
  }

  async createFile(p: string): Promise<string> {
    const check = await this.isExist(p);
    if (check !== false) {
      return 'File already exist';
    }

    fsp.writeFile(p, 'new file', 'utf-8');
    return `${p} successfully created`;
  }
}

export default File;
