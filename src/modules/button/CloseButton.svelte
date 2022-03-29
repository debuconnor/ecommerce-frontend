<script>
    export let target;

    function onButtonClick(){
        target.style.opacity = '0';
        setTimeout(() => {target.remove()}, 300);
    }
</script>

<button on:click={onButtonClick}>✕</button>

<style lang="scss">
    $size: 30px;
    $margin: 5px;

    button{
        width: $size;
        height: $size;
        position: absolute;
        right: 0;
        top: calc(-#{$size} - #{$margin});
        font-size: 25px;
        background-color: white;
        color: black;
        border: none;
        border-radius: 50%;
        line-height: 0;
        font-weight: bold;
        padding: 0;
        cursor: pointer;
        transition: all 0.3s;

        &:hover{
            background-color: black;
            color: white;
        }
    }
</style>