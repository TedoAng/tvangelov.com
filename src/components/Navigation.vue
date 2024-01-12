<script setup>
import Logo from '../assets/logo.svg'
</script>

<template>
  <div class="container nav d-flex justify-content-between p-0">
    <Logo class="logo"/>
    <div class="rest d-flex align-items-center justify-content-between">
        <div class="ul d-none d-lg-flex text-white">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>CONTACT</li>
        </div>
        <label class="hamburger-lines" @click="$emit('openSide')">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .nav {
        width: 100%;
        max-width: 1296px;
        height: 60px;
        background-color: #141C27;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 2;
        .logo {
            width: auto;
            height: 100%;
        }
        .hamburger-lines {
            display: block;
            height: 60px;
            width: 60px;
            top: 17px;
            left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: #55E6A5;
            padding: 20px 15px;
            cursor: pointer;
            .line {
                display: block;
                height: 4px;
                width: 100%;
                background: #141C27;
            }
        }
        li {
            margin: 0 20px;
            font-size: 1.2rem;
            cursor: pointer;
            &:hover {
                color: #55E6A5;
            }
        }
    }
    @media screen and (max-width: 320px) {
        .nav {
            height: 40px;
        }
        .hamburger-lines {
            height: 40px !important;
            padding: 10px 15px !important;
        }
    }
</style>
