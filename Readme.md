# SOLID 

SOLID es un conjunto de principios introducidos por Robert C. Martin (Uncle Bob) que tienen como objetivo guiar a los desarrolladores en la escritura de código limpio, mantenible y escalable. Estos principios promueven buenas prácticas de diseño de software y ayudan a evitar errores comunes en el desarrollo de software.

## Principio de Responsabilidad Única (SRP)
El Principio de Responsabilidad Única establece que una clase debe tener solo una razón para cambiar. En otras palabras, una clase debe tener solo una responsabilidad o trabajo. Al adherirse a este principio, las clases se vuelven más centradas, más fáciles de entender y menos propensas a ser afectadas por cambios en otras partes del sistema.

### Example:

```typescript
class FileManager {
  readFromFile() {       
    // Read data from a file
  }

  writeToFile(data: string) {
    // Write data to a file
  }
}
```
## Principio Abierto/Cerrado (OCP)
El Principio Abierto/Cerrado establece que las entidades de software (clases, módulos, funciones) deben estar abiertas para la extensión pero cerradas para la modificación. Esto significa que debería poder extender el comportamiento de un módulo sin modificar su código fuente. Este principio fomenta el uso de la abstracción y la herencia para lograr un código flexible y reutilizable.
### Example:

```typescript
abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
```

## Principio de Sustitución de Liskov (LSP)

El Principio de Sustitución de Liskov establece que los objetos de una superclase deben ser reemplazables por objetos de su subclase sin afectar la corrección del programa. Este principio garantiza que las clases derivadas se adhieran al contrato establecido por la clase base, promoviendo el polimorfismo y evitando comportamientos inesperados.

### Example:

```typescript
class Vehicle {
  startEngine() {
    // Iniciar el motor del vehículo
  }
}

class Car extends Vehicle {
  drive() {
    // Conducir el coche
  }
}

class Plane extends Vehicle {
  fly() {
    // Volar el avión
  }
}
```

## Principio de Segregación de Interfaces (ISP)
El Principio de Segregación de Interfaces sugiere que los clientes no deben estar obligados a depender de interfaces que no utilizan. En lugar de crear interfaces grandes y monolíticas, es mejor definir interfaces más pequeñas y específicas. Esto ayuda a evitar interfaces "gordas" y reduce la probabilidad de que las clases implementen métodos innecesarios.

### Example:

```typescript
interface Printer {
  printDocument(): void;
}

interface Scanner {
  scanDocument(): void;
}

class MultiFunctionDevice implements Printer, Scanner {
  printDocument() {
    // Imprimir un documento
  }

  scanDocument() {
    // Escanear un documento
  }
}

class SimplePrinter implements Printer {
  printDocument() {
    // Imprimir un documento
  }
}
```

## Principio de Inversión de Dependencias (DIP)

El Principio de Inversión de Dependencias establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones. Este principio fomenta el desacoplamiento y promueve el uso de interfaces o clases abstractas para definir contratos entre componentes. Al depender de abstracciones en lugar de implementaciones concretas, el sistema se vuelve más flexible y fácil de mantener.

### Example:

```typescript
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}

class FileLogger implements Logger {
  log(message: string) {
    // Registrar mensaje en un archivo
  }
}

class UserManager {
  constructor(private logger: Logger) {}

  addUser(username: string) {
    // Agregar un nuevo usuario
    this.logger.log(`Usuario ${username} agregado`);
  }
}
```


