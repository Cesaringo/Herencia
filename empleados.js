class Empleado{
    constructor(nombre, salario){
        this.nombre= nombre;
        this.salario=salario;
    }

    obtenerDetalles(){
        return `Empleado; ${this.nombre} Salario: ${this.salario}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, salario, departamento){
        super(nombre, salario)
        this.departamento=departamento;
    }

    obtenerDetalles(){
        return `Empleado: ${this.nombre} Salario: ${this.salario} Departamento: ${this.departamento} `
    }
}

const empleado = new Empleado("Jorge", 2000);

console.log(empleado.obtenerDetalles());

const gerente= new Gerente("Marta", 20000, "Recursos humanos");
console.log(gerente.obtenerDetalles());
