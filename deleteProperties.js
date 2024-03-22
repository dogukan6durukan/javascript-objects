const obj = {
    name: "Dogukan",
    age: 16,
    skills: ["javascript", "react"],
};

function deleteProperties(obj, ...deletedPropertyNames) {
    const properties = Object.keys(obj);
  
    if (properties.length < 1) return;
  
    if (deletedPropertyNames.length < 1) return;
  
    return deletedPropertyNames.filter((p) => {
      for (let key of properties) {
        if (p === key) {
          delete obj[key];
        }
      }
    });
}
  
deleteProperties(obj, "age", "name");
console.log(obj);
// Expected output: skills: (2) ['javascript', 'react']
