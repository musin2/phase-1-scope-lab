var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    console.log(customerName);
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    console.log(bestCustomer);
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    console.log(bestCustomer);
}

const leastFavouriteCustomer = 'j'; 

function changeLeastFavoriteCustomer() {
    leastFavouriteCustomer = 'john';    
}

upperCaseCustomer();
setBestCustomer();
overWriteBestCustomer();
changeLeastFavoriteCustomer();

console.log(customerName);
console.log(leastFavouriteCustomer);