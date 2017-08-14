import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const posts = [
      { id: 0, title: 'My First Post', body: 'Sample text' },
      { id: 1, title: 'My Second Post', body: 'Sample text' },
      { id: 2, title: 'My Third Post', body: 'Sample text' },
    ];

    return { posts };
  }

}
