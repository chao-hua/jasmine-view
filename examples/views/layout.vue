<template>
    <div>
        <div class="row">
            <js-layout>
                <js-header class="header">header</js-header>
                <js-main class="main" style="line-height: 240px;">main</js-main>
            </js-layout>
        </div>
        <div class="row">
            <js-layout>
                <js-header class="header">header</js-header>
                <js-main class="main">main</js-main>
                <js-footer class="footer">footer</js-footer>
            </js-layout>
        </div>
        <div class="row">
            <js-layout>
                <js-aside class="aside" style="line-height: 300px;">aside</js-aside>
                <js-main class="main" style="line-height: 300px;">main</js-main>
            </js-layout>
        </div>
        <div class="row">
            <js-layout>
                <js-header class="header">header</js-header>
                <js-layout>
                    <js-aside class="aside">aside</js-aside>
                    <js-main class="main">main</js-main>
                </js-layout>
                <js-footer class="footer">footer</js-footer>
            </js-layout>
        </div>
        <div class="row">
            <js-layout>
                <js-header class="header">header</js-header>
                <js-layout>
                    <js-main class="main">main</js-main>
                    <js-aside class="aside">aside</js-aside>
                </js-layout>
                <js-footer class="footer">footer</js-footer>
            </js-layout>
        </div>
        <div class="row">
            <js-layout>
                <js-header class="header">header</js-header>
                <js-layout>
                    <js-aside class="aside" style="line-height: 240px;">aside</js-aside>
                    <js-layout>
                        <js-main class="main">main</js-main>
                        <js-footer class="footer">footer</js-footer>
                    </js-layout>
                </js-layout>
            </js-layout>
        </div>
        <div class="row">
            <js-layout>
                <js-header class="header">header</js-header>
                <js-layout>
                    <js-aside class="aside" style="line-height: 240px;">aside</js-aside>
                    <js-main class="main" style="line-height: 240px;">main</js-main>
                </js-layout>
            </js-layout>
        </div>
        <div class="row">
            <js-layout>
                <js-aside class="aside" style="line-height: 300px;">aside</js-aside>
                <js-layout>
                    <js-header class="header">header</js-header>
                    <js-main class="main">main</js-main>
                    <js-footer class="footer">footer</js-footer>
                </js-layout>
            </js-layout>
        </div>
        <div class="row">
            <js-layout>
                <js-aside class="aside" style="line-height: 300px;">aside</js-aside>
                <js-layout>
                    <js-header class="header">header</js-header>
                    <js-main class="main" style="line-height: 240px;">main</js-main>
                </js-layout>
            </js-layout>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
* {
    text-align: center;
}

.row {
    margin: 50px 0;
    height: 300px;
    display: flex;
    width: 60%;
}

.header {
    background-color: #9999CC;
    line-height: 60px;
}

.footer {
    background-color: rgba(#9999CC, .8);
    line-height: 60px;
}

.aside {
    background-color: rgba(#9999CC, .6);
    line-height: 180px;
}

.main {
    background-color: rgba(#9999CC, .3);
    line-height: 180px;
}
</style>