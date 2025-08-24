const { greet } = require('./index');
if (require.main === module) {
  console.log(greet(process.argv[2] || 'world'));
}
