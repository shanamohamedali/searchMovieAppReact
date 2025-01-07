export const useLocalStorage=(key)=>{

    const setLocalData=(data)=>{
localStorage.setItem(key,JSON.stringify(data));

}

const getLocalData=()=>{
    const savedData=JSON.parse(localStorage.getItem(key));
    return savedData;
}
const clearLocalData=()=>{
localStorage.clear(key);
}

return{
    setLocalData,
    getLocalData,
    clearLocalData,
}

}