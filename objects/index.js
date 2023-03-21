// * CREATE A METHOD TO READING GIVEN OBJECT PROPERTIES

const userForReadingProperties = {
    name: "John",
    age: 32,
    greeting: ["Hello!", "Hola!", "Hallo!"],
}
  
function readProperties(obj) {
  const properties = Object.keys(obj);

  if (properties.length < 1) return;

  for (let key of properties) console.log(obj[key]);
}

// readProperties(userForReadingProperties);
// EXPECTED OUTPUT : 
// John
// 32
// (3) ['Hello!', 'Hola!', 'Hallo!']

// * CREATE A METHOD TO DELETE GIVEN OBJECT PROPERTIES

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

const userForDeletingProperties = {
  name: "Dogukan",
  age: 16,
  skills : ["javascript", "react"]
};

// deleteProperties(userForDeletingProperties, "age", "name");
// console.log(userForDeletingProperties);
// EXPECTED OUTPUT : skills: (2) ['javascript', 'react']

// * CREATE A METHOD FOR MAKING DEEP OBJECT COMPARASION

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

function areEqual(obj1, obj2) {
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    const obj1props = Object.keys(obj1);
    const obj2props = Object.keys(obj2);

    if (obj1props.length !== obj2props.length) return false;

    return obj1props.every((key) => {
      if (obj2.hasOwnProperty(key)) {
        if (typeof obj1[key] === "object" && obj1[key] !== null) {
          return areEqual(obj1[key], obj2[key]);
        }
        return obj1[key] === obj2[key];
      }

      return false;
    });
  }
}


// console.log(areEqual(user1, user2)); 
// EXPECTED OUTPUT : true


// * CREATE A METHOD FOR MAKING DEEP AGE CALCULATOR

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

function findAllAges(obj) {
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
      findAllAges(obj[key]);
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
// EXPECTED OUTPUT : [2006, 2007, 2005, 1999]

// * CREATE A METHOD FOR DEEP FINDING PROPERTY NAMES BY USING VALUES
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
// EXPECTED OUTPUT :
// Parent Object :  {zing: 'zong', ding: 'dang', ping: 'html'}  Key :  ping
// Parent Object :  (3) ['html', 'css', 'javascript']  Key :  0

