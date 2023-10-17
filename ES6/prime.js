let isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayPrime = array.filter(numPrime => isPrime(numPrime) === true);
console.log(arrayPrime);