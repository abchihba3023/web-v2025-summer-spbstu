function convertBase(num, fromBase, toBase){
    if (fromBase < 2 || fromBase > 16 || toBase < 2 || toBase > 16) {
        throw new Error("incorrect base number");
    }
    const regex = new RegExp(`^[0-9a-f]{1,}$`, 'i');
    if (!regex.test(num)) {
        throw new Error("incorrect number");
    }
    let value = parseInt(num, fromBase);
    return value.toString(toBase);
}
console.log(convertBase("255", 10, 16));
console.log(convertBase("1010", 2, 10));
console.log(convertBase("123", 5, 9));
console.log(convertBase("12Af", 16, 10));
