// Challenge 28
// Description:
// Create a proxy object that intercepts and logs all property access.
// Solution Approach:
// Use the Proxy object to create a wrapper around another object.

const targetObj = {
    property1: 'value1',
    property2: 'value2',
  };
  
  const objHandler = {
    get: function (target, property, receiver) {
      console.log(`Property '${property}' accessed`);
      return Reflect.get(target, property, receiver);
    },
  };
  
  const proxyObj = new Proxy(targetObj, objHandler);
  
  console.log(proxyObj.property1);
  console.log(proxyObj.property2);
  