<template>
    <div id="app">
        <div class="container">
            <home></home>
            <nav>
                <ul>
                    <li>
                        <router-link to="/grid">Grid</router-link>
                    </li>
                    <li>
                        <router-link to="/layout">Layout</router-link>
                    </li>
                    <li>
                        <router-link to="/button">Button</router-link>
                    </li>
                </ul>
            </nav>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Home from './views/home.vue'
export default {
    components: {
        Home
    },
    methods: {
        test() {
            alert('回调函数');
        }
    }
}
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