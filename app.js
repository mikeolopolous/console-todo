const { inquirerMenu, pausa } = require('./helpers/inquirer')
require('colors')

const main = async() => {
  let opt = ''

  do {
    opt = await inquirerMenu()
    await pausa()
  } while (opt !== '0');

}

main()