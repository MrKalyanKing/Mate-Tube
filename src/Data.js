//export const API_KEY=`AIzaSyB1B7Yfub92NmrjFIVNhjT6e8_3gI1IBkU`;


const value_converter=(value)=>{

    if(value>1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"k"
    }
    else{
        return value
    }
}