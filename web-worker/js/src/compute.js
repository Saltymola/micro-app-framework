function sum(total){
    for (let i = 0; i < 5000000000; i++) {
        total += i;
    }
    return total;
}

export default sum;