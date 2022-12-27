const inquirer = require('inquirer')
require('colors')

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.magenta} Crear tarea`
      },
      {
        value: '2',
        name: `${'2.'.magenta} Listar tareas`
      },
      {
        value: '3',
        name: `${'3.'.magenta} Listar tareas completadas`
      },
      {
        value: '4',
        name: `${'4.'.magenta} Listar tareas pendientes`
      },
      {
        value: '5',
        name: `${'5.'.magenta} Completar tarea(s)`
      },
      {
        value: '6',
        name: `${'6.'.magenta} Borrar tarea`
      },
      {
        value: '0',
        name: `${'0.'.magenta} Salir`
      }
    ]
  }
]

const inquirerMenu = async() => {
  console.clear()
  console.log('========================='.cyan)
  console.log('  Selecciona una opción'.magenta)
  console.log('=========================\n'.cyan)

  const { opcion } = await inquirer.prompt(preguntas)
  return opcion
}

const pausa = async() => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.magenta} para continuar`
    }
  ]

  console.log('\n')
  await inquirer.prompt(question)
}

const leerInput = async( message ) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate( value ) {
        if(value.length === 0) {
          return 'Por favor ingrese un valor'
        }
        return true
      }
    }
  ]

  const {desc} = await inquirer.prompt(question)
  return desc
}

const listadoTareasBorrar = async( tareas = [] ) => {
  const choices = tareas.map((tarea, index) => {
    const indice = `${index + 1}.`.magenta

    return {
      value: tarea.id,
      name: `${indice} ${tarea.desc}`
    }
  })

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices
    }
  ]

  const {id} = await inquirer.prompt(preguntas)
  return id
}

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar
}