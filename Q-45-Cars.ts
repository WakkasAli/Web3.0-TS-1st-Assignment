function carInfo(make, model, color = 'White') {
    return {
      mafacturer: make,
      modelName: model,
      color: color,
      Mileage: "100",
      rating: "5.00",
    };
  }
  
  let carSpec = carInfo("Honda", "CRV");
  console.log(`car object => `, carSpec);