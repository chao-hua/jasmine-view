<template>
    <div id="app">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <router-link to="/layout">Layout 布局</router-link>
                    </li>
                    <li>
                        <router-link to="/grid">Grid 栅格</router-link>
                    </li>
                    <li>
                        <router-link to="/button">Button 按钮</router-link>
                    </li>
                    <li>
                        <router-link to="/radio">Radio 单选框</router-link>
                    </li>
                    <li>
                        <router-link to="/checkbox">Checkbox 复选框</router-link>
                    </li>
                    <li>
                        <router-link to="/input">Input 输入框</router-link>
                    </li>
                </ul>
            </nav>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
nav {
    margin: 40px 0;

    ul {
        display: flex;
        flex-wrap: wrap;
    }

    li {
        display: inline-block;
    }

    li+li {
        border-left: solid 1px #bbb;
        padding-left: 10px;
        margin-left: 10px;
    }
}

.container {
    padding: 0 40px;
}

.v-link-active {
    color: #bbb;
}
</style>