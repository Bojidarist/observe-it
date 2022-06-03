exports.getAllCollectionsByUser = (user) => {
  return new Promise((res, rej) => {
    res([
      {
        collectionName: 'test collection',
        entities: [
          {
            source: 'https://google.com',
            properties: { type: 'get_once', propertie: 'href' },
            output: 'http://127.0.0.1:3000/entity/4511b784-e369-11ec-8fea-0242ac120002',
          },
        ],
      },
    ]);
  });
};
