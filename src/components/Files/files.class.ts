import dirTree from 'directory-tree';
import fse from 'fs-extra';
import fs from 'fs';

const fsp = fs.promises;

class File {
  path?: string;

  constructor(p?: string) {
    if (p) {
      this.path = p;
    }
  }

  /* 
  ==> METHODS:
      All the following methods will provide the ability to CRUD the userland
      
      userland == the container of the user which will provide the ability
      to store the files.
  */

  // Verifying a specific Path =>
  private async isExist(p: string): Promise<boolean> {
    const exist = await fse.pathExists(p);
    return exist;
  }

  // Reading the entire files structure =>
  readStructure(p: string, options?: object): object {
    return dirTree(p, options);
  }

  // Reading a specific file =>
  async readFile(p: string): Promise<string> {
    const file = await fsp.readFile(p, 'utf-8');
    return file;
  }

  // Creating a file =>
  async createFile(p: string): Promise<string> {
    const check = await this.isExist(p);
    if (check !== false) {
      return 'File already exists';
    }

    fsp.writeFile(p, 'new file', 'utf-8');
    return `${p} created successfully`;
  }

  // Deleting a file =>
  async deleteFile(p: string): Promise<string> {
    const check = await this.isExist(p);
    if (check !== true) {
      return 'File does not exists';
    }

    fse.remove(p);
    return `${p} deleted successfully`;
  }
}

export default File;
