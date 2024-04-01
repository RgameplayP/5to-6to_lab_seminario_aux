(() => {

  /* APLICA DRY */
  
  // Interfaz para las operaciones comunes en los ejercicios 1 y 2
  interface CalculationResult {
    result: number;
  }

  // Función genérica para calcular operaciones comunes
  function calculateOperationCommon(a: number, b: number, c: number): CalculationResult {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return { result: multiplicationResult };
  }

  // Función para calcular el área de un rectángulo
  function calculateRectangleArea(length: number, width: number): CalculationResult {
    return { result: length * width };
  }

  // Función para calcular el área de un círculo
  function calculateCircleArea(radius: number): CalculationResult {
    return { result: Math.PI * radius * radius };
  }

  // Función para validar el email o el nombre de usuario
  function validateEmailAndUsername(emailUsername: string): boolean {
    //...some code for validate here
    return false;
  }

  //EJEMPLO DE COMO USARLO

  console.log(calculateOperationCommon(2, 3, 4)); // Imprime el resultado de (2 + 3) * 4
  console.log(calculateRectangleArea(5, 10)); // Imprime el área de un rectángulo con longitud 5 y ancho 10
  console.log(calculateCircleArea(3)); // Imprime el área de un círculo con radio 3
  console.log(validateEmailAndUsername('email@example.com')); // Imprime true o false dependiendo de si el correo es válido
  console.log(validateEmailAndUsername('username')); // Imprime true o false dependiendo de si el nombre de usuario es válido
  
})();