const index = require('../')

test('should create a config', () => {
  expect(index).toMatchSnapshot()
})
