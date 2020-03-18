const request = async (callback)=>{
    const dataHTTP = await fetch("http://localhost:3030/feed")
    const dataJson = await dataHTTP.json();
    return dataJson;
}

export default request;