export async function getUser(id) {
    let _id = '';
    if(id !== undefined){
        _id = `/${id}`
    }

    const res = await fetch(`http://localhost:8080/customers/get${_id}`);
    const data = await res.json();

    if(res.ok){
        return JSON.parse(JSON.stringify(data));
    }
    else{
        throw new Error(data);
    }
}