// use supertest
const request = require('supertest');

// test user API
describe('The User API', () => {
  // test
  it('Returns a list of all users', async () => {
    // Connect to the server and get a response
    const res = await request('http://localhost:3000')
      .get('/api/users/list')
      .expect(200)
      .expect('Content-Type', /json/);

    // jest
    // expect to get a result that is an array
    expect(Array.isArray(res.body)).toBe(true);
    // expect the array to have something in it
    expect(res.body.length).toBeGreaterThan(0);
    // expect the username of the first returned user to be Administrator
    expect(res.body[0].username).toBe('administrator');
  });
});
