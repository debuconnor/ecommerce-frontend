<script>
    import Background from './Background.svelte';
    import CloseButton from '@modules/button/CloseButton.svelte';
    export let msg;
    let modalEl;
</script>

<div 
    class="modal container"
    bind:this={modalEl}
>
    <Background />
    <div class="modal box">
        <CloseButton target={modalEl} />
        <p>{msg}</p>
    </div>
</div>

<style lang="scss">
    .container{
        transition: opacity 0.3s;
    }

    .box{
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px;
        border-radius: 10px;
        background-color: white;
    }
</style>