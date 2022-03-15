<script>
    const id = 'test';
    const pw = 'test';
    let _id = '';
    let _pw = '';
    export let result;

    const login = () => {
        return id === _id && pw === _pw;
    }

    const submit = () => {
        result = 'incorrect';

        if(login()){
            result = 'success';
        }
    }
</script>

<main>
    <p>{result}</p>
    <form action="post">
        <label for="username">Username</label>
        <input type="text" id="username" bind:value={_id}/>
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={_pw} />
        <button type="button" on:click={submit}>Submit</button>
    </form>
</main>