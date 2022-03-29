<script>
    import { currentUrl } from '@lib/stores';
    export let text;
    export let goto;

    const link = `${currentUrl}${goto}`;
</script>
<a href={link}>{text}</a>

<style>
    a{
        display: inline-block;
        padding: 20px;
        background-color: black;
        color: white;
        cursor: pointer;
        text-decoration: none;
    }
</style>