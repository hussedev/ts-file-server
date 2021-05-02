import request from 'supertest';
import { app } from '../app';

describe('Test treeController', () => {
  const publicObj = {
    path: './public/MP4',
    name: 'MP4',
    children: [
      {
        path: 'public/MP4/Nextcloud intro.mp4',
        name: 'Nextcloud intro.mp4',
        size: 3963036,
        extension: '.mp4',
        type: 'file'
      }
    ],
    size: 3963036,
    type: 'directory'
  };
  it('Request /tree with custom file tree path as body should return the right file structure', async () => {
    const json = {
      folder: '/public/MP4'
    };

    const result = await request(app).post('/tree').send(json);

    expect(result.status).toBe(200);
    expect(result.body).toStrictEqual(publicObj);
  });

  it('Request /tree with wrong path should get error 500', async () => {
    const json = {
      folder: '/wrong'
    };

    const result = await request(app).post('/tree').send(json);

    expect(result.status).toBe(500);
  });
});
