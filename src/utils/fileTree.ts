import directoryTree, { DirectoryTree } from 'directory-tree';

export function dirTree(folder: string = ''): DirectoryTree {
  return directoryTree('./public');
}
