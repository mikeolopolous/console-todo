const Tarea = require("./tarea")

class Tareas {
  _listado = {}

  get listadoArr() {
    const listado = []
    Object.keys(this._listado).forEach( key => {
      const tarea = this._listado[key]
      listado.push(tarea)
    })

    return listado
  }

  constructor() {
    this._listado = {}
  }

  borrarTarea( id = '' ) {
    if (this._listado[id]) {
      delete this._listado[id]
    }
  }

  cargarTareasFromFile(tareas = []) {
    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea
    })
  }

  crearTarea( desc = '' ) {
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }

  listadoCompleto() {
    console.log()
    this.listadoArr.forEach( (tarea, index) => {
      const indice = `${index + 1}.`.magenta
      const {desc, fechaCompletado} = tarea
      const estado = fechaCompletado ? 'Completada'.green : 'Pendiente'.red

      console.log(`${indice} ${desc} :: ${estado}`)
    })
  }

  listarPendientesCompletadas( completadas = true ) {
    console.log()
    if (completadas) {
      const terminadas = this.listadoArr.filter( tarea => tarea.fechaCompletado)
      
      terminadas.forEach( (tarea, index) => {
        const indice = `${index + 1}.`.magenta
        const {desc, fechaCompletado} = tarea
        const fecha = `${fechaCompletado}`.green

        console.log(`${indice} ${desc} :: ${fecha}`)
      })
    }

    if (!completadas) {
      const pendientes = this.listadoArr.filter( tarea => !tarea.fechaCompletado)
      
      pendientes.forEach( (tarea, index) => {
        const indice = `${index + 1}.`.magenta
        const {desc} = tarea
        const fechaCompletado = 'Pendiente'.red

        console.log(`${indice} ${desc} :: ${fechaCompletado}`)
      })
    }
  }
}

module.exports = Tareas