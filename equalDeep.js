const obj1 = {
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
  
  const obj2 = {
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
  function equalDeep(obj1, obj2) {
    if (typeof obj1 === "object" && typeof obj2 === "object") {
      const obj1props = Object.keys(obj1);
      const obj2props = Object.keys(obj2);
  
      if (obj1props.length !== obj2props.length) return false;
  
      return obj1props.every((key) => {
        if (obj2.hasOwnProperty(key)) {
          if (typeof obj1[key] === "object" && obj1[key] !== null) {
            return equalDeep(obj1[key], obj2[key]);
          }
          return obj1[key] === obj2[key];
        }
  
        return false;
      });
    }
  }
  
console.log(equalDeep(obj1, obj2));
// Expected output : true
  