<script>
    const HOME_URL = '/admin'
    let navEl;
    let navUlEl;
    let expanded = true;

    function moveNav(bottomPosition){
        navEl.style.bottom = bottomPosition;
    }

    function onNavHandleClick(){
        if(expanded){
            moveNav(`-${navUlEl.offsetHeight}px`);
            expanded = false;
        }
        else{
            moveNav(0);
            expanded = true;
        }
    }

    function onNavMouseLeave(){
        moveNav(`-${navUlEl.offsetHeight}px`);
        expanded = false;
    }
</script>
<nav bind:this={navEl} on:mouseleave={onNavMouseLeave}>
    <div class="nav-handle" on:click={onNavHandleClick}>▲</div>
    <ul bind:this={navUlEl}>
        <li><a href={HOME_URL + '/setting'}>Setting</a></li>
        <li><a href={HOME_URL + '/product'}>Product</a></li>
        <li><a href={HOME_URL + '/customer'}>Customer</a></li>
        <li><a href={HOME_URL + '/category'}>Category</a></li>
    </ul>
</nav>
<style lang="scss">
    nav{
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        transition: bottom 0.3s;
    }

    ul{
        background-color: lightgray;
        margin: 0;
    }

    li{
        list-style: none;
    }

    .nav-handle{
        background-color: black;
        color: white;
        width: 130px;
        height: 40px;
        font-size: 20px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin: 0 auto;
    }
</style>