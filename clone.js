(function() {
  function isObject(data) {
    return typeof data === "object";
  }

  function isArray(data) {
    return Object.prototype.toString.call(data) === "[object Array]";
  }

  function clone(data) {
    let copied;

    if (!isObject(data) || data === null) {
      return data;
    }

    if (isArray(data)) {
      copied = [];

      for (let i = 0; i < data.length; i++) {
        copied[i] = clone(data[i]);
      }

      return copied;
    }

    copied = {};

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        if (!isObject(data[key])) {
          copied[key] = data[key];
        } else {
          copied[key] = clone(data[key]);
        }
      }
    }

    return copied;
  }

  let person = {
    name: "John",
    age: 45,
    address: { city: "NY", country: "US" }
  };

  let persons = [{ name: "Pierre Gadea", age: 35 }, { name: "Jenny Marquez", age: 24 }];

  /* Test Object cloning */
  let copy = clone(persons);
  console.log("persons =>", persons);

  copy[1].name = 'Jenny Gadea';
    console.log("copy =>", copy);

  /* Test Object cloning */
  // let copy = clone(person);
  // console.log('person =>', person);
  // copy.address.city = 'LA';
  // console.log('copy =>', copy);
})();
