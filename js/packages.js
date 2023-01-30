const packages = [
    { name: 'Paris', price: 100 },
    { name: 'London', price: 105 },
    { name: 'Tokyo', price: 200 },
    { name: 'Maldives', price: 255 },
    { name: 'Barcelona', price: 210 },
    { name: 'New York', price: 270 },
    { name: 'Maui', price: 120 },
    { name: 'Rome', price: 100 },
    { name: 'South Island', price: 135 },
    { name: 'Sydney', price: 290 },
    { name: 'Mumbai', price: 200 },
    { name: 'Hawaii', price: 250 },
    { name: 'Egypt', price: 190 },
    { name: 'Santorini', price: 200 },
    { name: 'Amsterdam', price: 150 },
    { name: 'Dubai', price: 290 },
]

const filteredPackages = packages.filter((packages) => {
    return packages.price <= 200;
})

console.log(filteredPackages);

const packageName = [];
packages.forEach(function (package) {
    packageName.push(package.name);
});

console.log("Packages names: ", packageName.toString());

const packagesName = packages.map((packages) => {
    return packages.name;
})

console.log("Packages names me map(): ", packagesName.toString());

const totalPrices = packages.reduce((accumulator, package) => accumulator + package.price, 0);

console.log("Total price:", totalPrices);