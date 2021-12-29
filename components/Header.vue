<template>
    <header id="menu-bar">
        <div id="static-items">
            <span id="logo">JDBH</span>
            <div id="menu-buttons">

                <button 
                aria-haspopup="true" 
                aria-expanded="false"
                data-toggle="dropdown"
                @click="showMenu"
                :class="isActive ? 'hidden' : 'show'"
                > -
                <!-- -
                    <span aria-hidden="true">&#x25be</span> -->
                </button>
                <button 
                aria-haspopup="false" 
                aria-expanded="true"
                data-toggle="dropdown"
                @click="showMenu"
                :class="isActive ? 'show' : 'hidden'"
                >
                Close
                    <span aria-hidden="true">&#x25be</span>
                </button>
            </div>
        </div>
        <div 
            id="pop-out" 
            :class="isActive ? 'show' : 'hidden'"
            role="menu" 
            aria-hidden="true"
        >
            <nav>
                <ul>
                    <span>MENU</span>
                    <!-- <li>Home</li> -->
                    <li>
                        <nuxt-link to="/projects">
                            projects
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">
                            about
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/contact">
                            contact
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            isActive: false
        }
    },
    methods: {

        showMenu(){
            this.isActive = !this.isActive
            return  this.isActive
        }
    },
    mounted(){
        // console.log(this.isActive)
    }
}

</script>

<style scoped>
    header {
        border-bottom: 1px solid #ffffff;
        height: 50px;
        /* display: flex; */
        /* align-items: center;
        height: 60px;
        width: 100%; */
        /* position: fixed; */
    }
    /* #static-items {
        width: 100%;
        display: flex;
        justify-content: space-between;

    } */
    button {
        background: none;
        color: #ffffff;
        width: 40px;
        height: 40px;
        font-size: 15px;
        outline: none;
        border: 1px solid;
    }
</style>