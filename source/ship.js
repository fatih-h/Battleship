
function Ship(length){
    
    let arr = new Array(length);
    for(let i = 0; i < length ; i++){
        arr[i] = 1;
    }

    this.length = length;
    const hit = (index) => {
        arr[index] = 0;
        return arr;
    }

    const isSunk = () => {
        let counter = 0;
        for(let i = 0; i < length ; i++){
            if(arr[i] > 0){
                counter++;
            }
        }
        if(counter > 0){
            return false;
        }else{
            return true;
        }
    }
    return {arr, length, hit, isSunk}
}

export default Ship; 