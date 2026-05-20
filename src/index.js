const { upper, lower } = require('./utils');

function main(argv) {
  const args = argv.slice(2);
  const flag = args[0] || '--upper';
  const message = args.slice(1).join(' ') || 'hello, zayzream';

  switch (flag) {
    case '--upper':
      console.log(upper(message));
      break;
    case '--lower':
      console.log(lower(message));
      break;
    case '--help':
      console.log('usage: zayzream [--upper|--lower|--help] [message...]');
      break;
    default:
      console.error(`unknown flag: ${flag}`);
      process.exit(1);
  }
}

main(process.argv);
