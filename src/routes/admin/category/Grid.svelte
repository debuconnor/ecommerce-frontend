<script>
    import { getItem } from './getCategory';

    let promise = getItem();
</script>

{#await promise}
    <p>...loading</p>
{:then items} 
    <table>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Enabled</th>
        </tr>
        {#each items as item}
        <tr>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.enabled}</td>
        </tr>
        {/each}
    </table>
{:catch error}
    <p>Error occurred: {error}</p>
{/await}

