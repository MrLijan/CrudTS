# Crudder-ts / Files


The main responsibility of Crudder is to being an agent inside the userland's container. This means that it's responsible for file handling and more...

| [!] Code snippets can be found at the end of each method. |
|--|

<br>

## Base Routes
The base routes will provide the ability to negotiate with the file methods.
<br>

### Routes

1. `/read/home` - This route will return the full structure of the userland's folder.
    - **{query} p** - represents the full path → Required.
2. `/read` - This route will fetch a specific file by receiving a specific path.
    - **{query} p** - represents the full path → Required.
3. `/create` - This route will create a new file by receiving its full path and data.
    - **{query} p** - represents the full path → Required.
    - **{body} data** - represents the data that will be added during its creation → Optional.
4. `/save` - This route will overwrite a file by receiving its full path and data.
    - **{query} p** - represents the full path → Required.
    - **{body} data** - represents the data that will be added during its creation → Optional.

5. `/delete` - This route will delete a specific file by receiving its full path.
    - **{query} p** - represents the full path → Required.

<br>

## The File class

The File class will serve *Crudder-ts* as a File handler. All the functions will be placed there.

<br>

### Imports

---

1. `directory-tree` - the plugin that is responsible for creating a JSON file that will contain the userland's folder structure.
    - Documentation: *[https://www.npmjs.com/package/directory-tree](https://www.npmjs.com/package/directory-tree)*
2. `fs-extra` - the plugin that is responsible for the extra file system callouts.
    - Documentation: [*https://github.com/jprichardson/node-fs-extra*](https://github.com/jprichardson/node-fs-extra)
3. `fs` - the plugin that is responsible for the file system's manipulations.
    - Documentation: [*https://nodejs.org/api/fs.html*](https://nodejs.org/api/fs.html)

<br>

### Properties

---

1. `path` - 
    - String
    - Optional

<br>

### Methods

---

`readStructure()` - This method will return the structure of the userland's folder.

- **Returns** → `Object`
- **Arguments:**
    1. `p: string` - presents the path that will be provided as a string.
    2. `options?: object` - presents the options for the [*directory-tree module](https://www.npmjs.com/package/directory-tree).*

- **Snippet:**

    ```tsx
    readStructure(p: string, options?: object): object {
        return dirTree(p, options);
      }
    ```

`readFile()` - This method will return a specific file from the userland.

- returns → `String`
- **Arguments:**
    - `p: string` - presents the path that will be provided as a string.

- **Snippet:**

    ```tsx
    async readFile(p: string): Promise<string> {
        const file = await fsp.readFile(p, 'utf-8');
        console.log(typeof file);
        return file;
      }
    ```

`isExist() - Private` - This method will check whether a path exists or not.

- **Returns** → `Boolean`
- **Arguments:**
    - `p: string` - presents the path that will be provided as a string.

- **Snippet:**

    ```tsx
    private async isExist(p: string): Promise<boolean> {
        const exist = await fse.pathExists(p);
        return exist;
      }
    ```

`createFile()` - This method will create a file in a specific path.

- **Returns** → `String`
- **Arguments:**
    - `p: string` - presents the path that will be provided as a string.
    - `data: string` - presents the data that will be added to the created file.

- **Snippet:**

    ```tsx
    async createFile(p: string, data: string): Promise<string> {
        const check = await this.isExist(p);
        if (check !== false) {
          return 'File already exists';
        }

        fsp.writeFile(p, data, 'utf-8');
        return `${p} created successfully`;
      }
    ```

`updateFile()` - This method will update a file in a specific path.

- **Returns** → `String`
- **Arguments:**
    - `p: string` - presents the path that will be provided as a string.
    - `data: string` - presents the data that will be added to the created file.

- **Snippet:**

    ```tsx
    async createFile(p: string, data: string): Promise<string> {
        const check = await this.isExist(p);
        if (check !== false) {
          return 'File already exists';
        }

        fsp.writeFile(p, data, 'utf-8');
        return `${p} created successfully`;
      }
    ```

`deleteFile()` - This method will first check for the path's existence. If exists, the method will delete the file.

- **Returns** → `String`
- **Arguments:**
    - `p: string` - presents the path that will be provided as a string.
    - `data: string` - presents the data that will be added to the created file.

- **Snippet:**

    ```tsx
    async deleteFile(p: string): Promise<string> {
        const check = await this.isExist(p);
        if (check !== true) {
          return 'File does not exists';
        }

        fse.remove(p);
        return `${p} deleted successfully`;
      }
    ```
