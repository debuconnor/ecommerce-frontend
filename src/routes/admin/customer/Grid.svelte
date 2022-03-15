<script>
    import { getUser } from './getCustomer';

    let promise = getUser();
</script>

{#await promise}
    <p>...loading</p>
{:then users} 
    <table>
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Name</th>
        </tr>
        {#each users as user}
        <tr>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.firstname} {user.middlename} {user.lastname}</td>
        </tr>
        {/each}
    </table>
{:catch error}
    <p>Error occurred: {error}</p>
{/await}

