<script>
    const HOME_URL = '/admin'
</script>
<header>
    <a href={HOME_URL}>Logo</a>
</header>

<nav>
    <a href={HOME_URL + '/customer'}>Customer</a>
    <a href={HOME_URL + '/category'}>Category</a>
    <a href={HOME_URL + '/product'}>Product</a>
    <a href={HOME_URL + '/setting'}>Setting</a>
</nav>

<slot></slot>