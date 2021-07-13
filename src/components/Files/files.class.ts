import dirTree from 'directory-tree';

class File {
  path: string;

  constructor(p: string) {
    this.path = p;
  }

  readStructure(p: string, options?: object): object {
    return dirTree(p, options);
  }
}

export default File;
