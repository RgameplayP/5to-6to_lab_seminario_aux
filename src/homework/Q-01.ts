(() => {

  // Lista de emails de usuarios de Meta-X
  const listEmails: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];
  
  console.log(listEmails);
  
  // Lista de compras de un carrito
  const cartItemsList: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];
  
  console.log(cartItemsList);
  
  // Función para sumar más 3 a un numero y retornarlo
  const increaseMoreThree = (num: number): number => num + 3;
  
  console.log(increaseMoreThree(2));
    
  // Función para capitalizar una palabra pasada por parámetro
  // Identar o refactorizar si es necesario
  function capitalizeWord(word: string): string {
    word.toLowerCase();    
    const capitalized = word.charAt(0).toUpperCase().toString().concat(word.substring(1, word.length));
    return capitalized;
  }
  
  console.log(capitalizeWord("capricorn"));
    
  // Variable que alerta en caso de que algún evento suceda
  let eventOccurred: boolean = false;
  
  if (eventOccurred) console.log('event');
  
  // Variable que verifica si un usuario puede acceder o no
  let canAccess: boolean = true;
  
  if (canAccess) console.log('welcome');
  
  // Variable para hallar el promedio de 3 números
  const averageOfThreeNumbers: number = (1 + 2 + 3) / 3;
  
  console.log(averageOfThreeNumbers);
    
  // Variable que almacena el valor de PI
  const PI_VALUE: number = 3.141592654;
  
  console.log(PI_VALUE);
  
  // Variable que controla si un archivo es modificable 
  let isEditable: boolean = false;
  
  if (isEditable) console.log('edit this file?');
    
  // Variable para almacenar el valor de e
  const EULER_VALUE: number = 2.718281828; 

  console.log(EULER_VALUE);
  
  })();