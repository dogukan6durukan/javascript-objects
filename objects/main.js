const userForReadingProperties = {
    name: "John",
    age: 32,
    greeting: ["Hello!", "Hola!", "Hallo!"],
}

/**
 * A method for reading given object properties.
*/
function readProperties(obj) {
  const properties = Object.keys(obj);

  if (properties.length < 1) return;

  for (let key of properties) console.log(obj[key]);
}

// readProperties(userForReadingProperties);

// Expected output : 
// John
// 32
// (3) ['Hello!', 'Hola!', 'Hallo!']


const userForDeletingProperties = {
  name: "Dogukan",
  age: 16,
  skills : ["javascript", "react"]
};


/**
 * A method for deleting the given object properties.
*/
function deleteProperties(obj, ...deletedPropertyNames) {
  const properties = Object.keys(obj);

  if (properties.length < 1) return;

  if (deletedPropertyNames.length < 1) return;

  // FIND AND DELETE PROPERTIES
  return deletedPropertyNames.filter((p) => {
    for (let key of properties) {
      if (p === key) {
        delete obj[key];
      }
    };
  });
}


// deleteProperties(userForDeletingProperties, "age", "name");
// console.log(userForDeletingProperties);
// Expected output: skills: (2) ['javascript', 'react']



const user1 = {
  name: "Dogukan",
  age: 17,
  alive: undefined,
  admin: null,
  skills: {
    frontend: {
      markup: ["html", "css"],
      interaction: ["javascript"],
      frameworks: {
        markup: ["tailwind"],
        interaction: ["react", "next", "astro"],
      },
    },

    backend: {
      technologies: ["nodejs", "php"],
      frameworks: {
        techFrameworks: ["fastify", "express", "laravel"],
      },
    },
  },
};

const user2 = {
  name: "Dogukan",
  age: 17,
  alive: undefined,
  admin: null,
  skills: {
    frontend: {
      markup: ["html", "css"],
      interaction: ["javascript"],
      frameworks: {
        markup: ["tailwind"],
        interaction: ["react", "next", "astro"],
      },
    },

    backend: {
      technologies: ["nodejs", "php"],
      frameworks: {
        techFrameworks: ["fastify", "express", "laravel"],
      },
    },
  },
};

/**
 * A method for making deep object comparison.
*/
function areEqualDeep(obj1, obj2) {
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    const obj1props = Object.keys(obj1);
    const obj2props = Object.keys(obj2);

    if (obj1props.length !== obj2props.length) return false;

    return obj1props.every((key) => {
      if (obj2.hasOwnProperty(key)) {
        if (typeof obj1[key] === "object" && obj1[key] !== null) {
          return areEqualDeep(obj1[key], obj2[key]);
        }
        return obj1[key] === obj2[key];
      }

      return false;
    });
  }
}


// console.log(areEqualDeep(user1, user2)); 
// Expected output : true



const users = {
  user1: {
    name: "dogukan",
    surname: "durukan",
    age: 17,
    siblings: {
      sibling1: {
        name: "John",
        surname: "Doe",
        bestFriends: {
          age: [16, 18, 24, { age: 39 }],
        },
      },
    },
  },
};

const allAges = [];

/**
 * A method for finding all dates and calculating each one's age.
*/
function findAllDates(obj) {
  const keys = Object.keys(obj);

  if (keys.length < 1) return;

  for (let key of keys) {
    if (key === "age") {
      if (typeof obj[key] === "number") {
        allAges.push(obj[key]);
      }
      if (Array.isArray(obj[key])) {
        extractArr(obj[key]);
      }
    }

    if (typeof obj[key] === "object" && obj[key] !== null) {
      findAllDates(obj[key]);
    }
  }

  return calculateAges(allAges);
}

function calculateAges(arr) {
  if (arr.length < 1) return;
  const fullYear = new Date().getFullYear();
  return arr.map((age) => {
    return fullYear - age;
  });
}

function extractArr(arr) {
  if (arr.length < 1) return;
  for (let key of arr) {
    if (typeof key === "number") {
      allAges.push(key);
    }
  }
}

// console.log(findAllAges(users)); 
// Expected output : [2006, 2007, 2005, 1999]



const userForFindingPropNames = {
  name: "dogukan",
  age: 16,
  skills: {
    backend: {
      zing: "zong",
      ding: "dang",
      ping: "html",
    },

    frontend: {
      markup: ["html", "css", "javascript"],
    },
  },
};

/**
 * A deep checking method for 
 * finding property names by using property values.
*/
function findPropertyKeys(obj, value) {
  if (typeof obj === "object") {
    const keys = Object.keys(obj);
    if (keys.length < 0) return;

    for (const k of keys) {
      if (typeof obj[k] === "object") {
        findPropertyKeys(obj[k], value);
      }

      if (obj[k] === value) {
        console.log("Parent Object : ", obj , " Key : ", k);
      }
    }
  }
}

// findPropertyKeys(userForFindingPropNames, "html");

// Expected output :
// Parent Object :  {zing: 'zong', ding: 'dang', ping: 'html'}  Key :  ping
// Parent Object :  (3) ['html', 'css', 'javascript']  Key :  0



const objForShallowCheck1 = {
  foo: "bar",
  bar: "baz",
  skills: { experience: 4, skills: ["html", "css", "javascript"] },
};

const objForShallowCheck2 = Object.assign({}, objForShallowCheck1);


/**
* Check two objects whether copied as a shallow copy or not.
*/
function checkShallowCopy(obj1, obj2) {
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    if (obj1 === obj2) return false;

    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);

    if (objKeys1.length !== objKeys2.length) return false;

    return objKeys1.every((current, index) => {
      if (current === objKeys2[index]) {
        return obj1[current] === obj2[current];
      }
      return false;
    });
  }

  return false;
}

// console.log(checkShallowCopy(objForShallowCheck1, objForShallowCheck2)); 
//Expected output : true
