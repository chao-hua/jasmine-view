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
                    <!-- <li>
                        <router-link to="/input-number">InputNumber 计数器</router-link>
                    </li> -->
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
        border-right: solid 1px #bbb;
        padding-right: 10px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:last-child {
            border-right: none;
        }
    }
}

.container {
    padding: 0 40px;
}

.v-link-active {
    color: #bbb;
}
</style>