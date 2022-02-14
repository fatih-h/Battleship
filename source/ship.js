
function Ship(length){

    /*Object Creation Tasks */
    let arr = new Array(length);
    for(let i = 0; i < length ;i++){
        arr[i] = 1;
    }
    /*Object Property */
    this.length = length;
    
    /*Object Methods */
    this.hit = (index) => {
        arr[index] = 0;
    }
    this.isSunk = () => {
        for(let i = 0; i < length; i++){
            if(arr[i] > 0){
                return false;
            }
        }
        return true;
    }
    this.section = () => {
        return arr;
    }
}

export default Ship;
