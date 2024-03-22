const obj = {
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
   * finding property keys by using property values.
   */
  function findKeys(obj, value) {
    if (typeof obj === "object") {
      const keys = Object.keys(obj);
      if (keys.length < 0) return;
  
      for (const k of keys) {
        if (typeof obj[k] === "object") {
            findKeys(obj[k], value);
        }
  
        if (obj[k] === value) {
          console.log("Parent Object : ", obj, " Key : ", k);
        }
      }
    }
  }
  
findKeys(obj, "html");
  
// Expected output :
// Parent Object :  {zing: 'zong', ding: 'dang', ping: 'html'}  Key :  ping
// Parent Object :  (3) ['html', 'css', 'javascript']  Key :  0
  