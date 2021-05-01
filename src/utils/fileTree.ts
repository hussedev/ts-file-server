import directoryTree, { DirectoryTree } from 'directory-tree';

export async function dirTree(folder: string = ''): Promise<DirectoryTree> {
  const tree = await directoryTree('./public');
  return tree;
}
