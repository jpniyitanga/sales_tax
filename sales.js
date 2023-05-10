const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


let sumSales = function(array) {
  let sales = array.reduce((total, item) => {
    return total + item;
  }, 0);
  return sales;
};


/* IMPLEMENTATION USING DOT NOTATION */
const calculateSalesTax = function(salesData, taxRates) {
  let result = {};
  for (let company of salesData) {    
    result[company.name]; // SET COMPANY NAME AS A KEY OF RESULT OBJECT    
    if (!result[company.name]) {
      result[company.name] = {
        totalSales: sumSales(company.sales),
        totalTaxes: sumSales(company.sales) * taxRates[company.province]};

    } else {
      result[company.name].totalSales += sumSales(company.sales);
      result[company.name].totalTaxes += sumSales(company.sales) * taxRates[company.province];
    }    
  }
  return result;
};

let results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);


/*IMPLEMENTATION USING BRACKET NOTATION*/

// const calculateSalesTax = function(salesData, taxRates) {
//   let result = {};
//   for (let company of salesData) {
//     //console.log(company["name"]);
//     //console.log(company.sales);
//     result[company["name"]];
//     if (!result[company["name"]]) {
//       result[company["name"]] = {
//         totalSales: sumSales(company["sales"]),
//         totalTaxes: sumSales(company["sales"]) * taxRates[company["province"]]};

//     } else {
//       result[company["name"]]["totalSales"] += sumSales(company["sales"]);
//       result[company["name"]]["totalTaxes"] += sumSales(company["sales"]) * taxRates[company["province"]];

//     }
    
    
//   }

//   return result;
// };






