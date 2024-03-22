const obj1 = {
    foo: "bar",
    bar: "baz",
    skills: { experience: 4, skills: ["html", "css", "javascript"] },
  };
  
const obj2 = Object.assign({}, obj1);
  
  /**
   * Check two objects whether copied as a shallow copy or not.
   */
  function isShallow(obj1, obj2) {
    if (obj1 === obj2) return false; // or false you decide
  
    if (
      typeof obj1 === "object" &&
      typeof obj2 === "object" &&
      obj1 !== null &&
      obj2 !== null
    ) {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
  
      if (keys1.length !== keys2.length) return false;
  
      return keys1.every(
        (key) => Object.hasOwn(obj2, key) && obj1[key] === obj2[key]
      );
    }
  }
  
console.log(isShallow(obj1, obj2));
// Expected output : true