<script>
    import { getItem } from './getProduct';

    let promise = getItem();
</script>

{#await promise}
    <p>...loading</p>
{:then items} 
    <table>
        <tr>
            <th>Sku</th>
            <th>Name</th>
            <th>Price</th>
            <th>Enabled</th>
        </tr>
        {#each items as item}
        <tr>
            <td>{item.sku}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.enabled}</td>
        </tr>
        {/each}
    </table>
{:catch error}
    <p>Error occurred: {error}</p>
{/await}

