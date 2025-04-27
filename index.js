
//задание 1

//console.log(process.argv)

//npm install yargs

//require
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { format, addDays, addMonths } = require('date-fns');

//const
const argv = yargs(hideBin(process.argv))
    .command('add', 'Получить дату в будущем', (yargs) => {
        return yargs.option('d', {
            alias: 'days',
            describe: 'Количество дней',
            type: 'number'
        });
    })
    .argv

const currentDate = () => {
  const date = new Date();

  if (argv.year || argv.y) {
    return date.getFullYear();
  }

  if (argv.month || argv.m) {
    return date.getMonth() + 1;
  }

  if (argv.date || argv.d) {
    return format(date, 'yyyy-MM-dd');
  }

  return format(date, 'yyyy-MM-dd___THH:mm:ss');
};

const addDate = () => {
    const date = new Date();
    const days = argv.days || argv.d || 0;

    return format(addDays(date, days), 'yyyy-MM-dd___THH:mm:ss');
};


const subDate = () => {
    const date = new Date();
    const month = argv.month || argv.m || 0;

    return format(addMonths(date, month), 'yyyy-MM-dd___THH:mm:ss');
};

//console
console.log(argv)

if (argv._[0] === 'current') {
    console.log('func current:');
    console.log(currentDate());
} else if (argv._[0] === 'add') {
    console.log('func add:');
    console.log(addDate());
} else if (argv._[0] === 'sub') {
    console.log('func sub:');
    console.log(subDate());
}

//команды запуска
//node index.js current
//node index.js add -d 2
//node index.js sub --month 1
