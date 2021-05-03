import directoryTree, { DirectoryTree } from 'directory-tree';

export async function dirTree(folder: string = '/public'): Promise<DirectoryTree> {
  const tree = await directoryTree(`.${folder}`);
  return tree;
}
