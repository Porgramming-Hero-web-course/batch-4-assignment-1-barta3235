Type guards are essential for writing and defining variables by ensuring they meet specific conditions before runtime. This, in turn, prevents runtime error while providing more clarity as valid compilation occurs based on accurate data types. Various types of type guards and their corresponding use cases enable more clarity and accuracy while writing and constructing codes. 





Typeof Type Guard:
This type guard checks the type of variable, and only after identifying the type are certain operations or codes executed. Typeof is used for primitive data types like string, number, and boolean. The following code snippet shows an example of the use case related to typeof.

function printId(id: string | number) {
  if (typeof id === 'string') {
       console.log('ID as string:', id.toUpperCase());
  } else {
       console.log('ID as number:', id.toFixed(2));
  }
}

Here, if the type of id is string, a line of code is executed, whereas if the type isn't string but number, a different line of code is executed.




In Type Guard:
The 'in' type guard checks for properties within an object, which can be used to identify different object types while objects are in a union.

interface Dog {
  bark: () => void;
}
interface Cat {
  meow: () => void;
}

function makeSound(animal: Dog | Cat) {
  if ('bark' in animal) {
    animal.bark();
  } else {
    // Otherwise, treat it as a Cat
    animal.meow();
  }
}

In the provided code, the animal parameter is a union of two interfaces, Dog and Cat. The makeSound function checks if the animal has a bark method using the in operator. If the bark method exists, the animal is treated as a Dog, and the bark method is called. Otherwise, it is considered a Cat, and the meow method is called. This approach uses TypeScript's type narrowing to distinguish between the two types based on the presence of the bark property.




Instanceof Type Guard:
The instanceof type guard checks if an object is an instance of a specific class.

class Car {
  drive() {
    console.log('Driving');
  }
}
class Bike {
  ride() {
    console.log('Riding');
  }
}

function useVehicle(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    // If the vehicle is an instance of Car, call the drive method
    vehicle.drive();
  } else {
    // Otherwise, call the ride method for Bike
    vehicle.ride();
  }
}

In the code, useVehicle uses instanceof to determine whether vehicle is a Car or a Bike. If it's a Car, it calls the drive method; otherwise, it calls the ride method for Bike.




Custom Type Guard:
Custom type guard allows typescript to narrow down the type of the variable, ensuring safe access to properties and methods. A custom type example can be seen in the code snippet below, where a function is constructed that returns the type of the variable as a string through boolean results.

function isString(value: string | number): value is string { 
    return typeof value === "string"; 
}

Here, the function can be called to check the variable type and allow specific code execution.

if (isString(value)) { 
        console.log(value.toUpperCase()); 
    } 
    else { 
        console.log(value.toFixed(2));
    }





Type guard in TypeScript narrows down the type of a variable, enabling us to safely access properties or methods specific to that type. It helps TypeScript understand the exact type of a variable, hance, improving type safety in your code.