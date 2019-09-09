export const billResponse = (bill)=> ({
  success:{
    status: 200,
    statusText: 'OK',
    data:bill
  },
  failure:{
    status: 500
  },
  notFound:{
    status: 404
  }
});

export const searchResponse = (query) => ({
  success:{
    status: 200,
    statusText: 'OK',
    data:{
      results:[]
    }
  },
  failure:{
    status:500,
    data:{}
  },
  notFound:{
    status:404,
    data:{}
  }
});