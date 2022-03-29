export async function Get(url){
    const res = await fetch(url);
    const result = await res.json();

    if(res.ok){
        return JSON.parse(JSON.stringify(result));
    }
    else{
        throw new Error(result);
    }
}

export async function Post(url, jsonData){
    const res = await fetch(url, {
        method: 'POST',
        body: jsonData,
        headers:{
            'Content-Type': 'application/json'
        }
    });

    const result = await res.json();
    
    if(res.ok){
        return JSON.parse(JSON.stringify(result));
    }
    else{
        throw new Error(result);
    }
}

export async function Put(url, jsonData){
    const res = await fetch(url, {
        method: 'PUT',
        body: jsonData,
        headers:{
            'Content-Type': 'application/json'
        }
    });

    const result = await res.json();
    
    if(res.ok){
        return JSON.parse(JSON.stringify(result));
    }
    else{
        throw new Error(result);
    }
}

export async function Del(url){
    const res = await fetch(url, {
        method: 'DELETE'
    });
    const result = await res.json();

    if(res.ok){
        return JSON.parse(JSON.stringify(result));
    }
    else{
        throw new Error(result);
    }
}