<script>
    import { API_BASE_URL } from '@lib/env';
    import { Get } from '@lib/fetcher';
    export let uri;
    let promise = Get(`${API_BASE_URL}${uri}`);
</script>

{#await promise}
    <p>...loading</p>
{:then items} 
    <table>
        <tr>
            {#each Object.entries(items[0]) as [k, v]}
            <th>{k}</th>
            {/each}
        </tr>
        {#each items as item}
        <tr>
            {#each Object.entries(item) as [k, v]}
            <td>{v}</td>
            {/each}
        </tr>
        {/each}
    </table>
{:catch error}
    <p>Error occurred: {error}</p>
{/await}

