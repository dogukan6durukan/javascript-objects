const obj = {
    name: "John",
    age: 32,
    greeting: ["Hello!", "Hola!", "Hallo!"],
  };
  
  function readProperties(obj) {
    const properties = Object.keys(obj);
  
    if (properties.length < 1) return;
  
    for (let key of properties) console.log(obj[key]);
  }
  
  readProperties(obj);
  
  // Expected output :
  // John
  // 32
  // (3) ['Hello!', 'Hola!', 'Hallo!']
  