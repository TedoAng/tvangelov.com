<script setup>
    import Navigation from './components/Navigation.vue';
    import Hero from './components/Hero.vue';
    import SideMenu from './components/SideMenu.vue';
    import { Footer, Services, Newsletter } from './components';
    import { ref, onMounted, reactive } from 'vue';

    const loadSideBar = ref(false);
    const sw = ref(false);
    
    onMounted(() => {

    });

    const show = () => {
        loadSideBar.value = !loadSideBar.value;
        lockScroll();
    };

    const lockScroll = () => {
        sw.value = !sw.value;
        const val = sw.value ? 'hidden' : 'auto';
        document.querySelector('body').style.overflow = val;
    }
</script>

<template>
        <Navigation @open-side="show"/>
        <Hero/>
        <Services class="service"/>
        <Newsletter/>
        <Footer/>
        <Transition>
            <SideMenu v-if="loadSideBar" @open-side="show"/>
        </Transition>
        <div v-if="loadSideBar" class="backdrop"></div>
</template>

<style scoped>
    .v-enter-active,
    .v-leave-active {
    transition: all 0.5s ease-in;
    }

    .v-enter-from,
    .v-leave-to {
    transform: translateX(100%);
    }
    .backdrop {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: black;
        opacity: .5;
        z-index: 3;
    }
</style>

<style lang="scss">
    body {
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background: #141C27;
            border-radius: 5px;
            width: 30px;
        }
    }
</style>
