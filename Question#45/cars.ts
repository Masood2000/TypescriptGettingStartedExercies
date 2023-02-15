interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, model: string, ...args: any[]): Car {
    const car: Car = { manufacturer, model };
    args.forEach((arg, index) => {
        
      if (index % 2 == 0) {
        car[args[index]] = args[index + 1];
      }
    });
    return car;
  }
  
  const myCar = createCar('Toyota', 'Corolla',"Color",'Blue',"roof","no");
  console.log(myCar);
  