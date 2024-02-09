<script setup>

</script>

<template>
    <div class="tech-stack d-flex">
        <div class="rotter">
            <strong>Laravel</strong>
            <strong>PHP</strong>
            <strong>JavaScript</strong>
            <strong>Vue</strong>
            
        </div>
        <div class="rotter-2">
            <strong>Laravel</strong>
            <strong>PHP</strong>
            <strong>JavaScript</strong>
            <strong>Vue</strong>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .tech-stack {
        position: relative;
        height: 9rem;
        background-color: #55E6A5;
        overflow: hidden;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .rotter {
        position: absolute;
        display: flex;
        flex-shrink: 0;
        justify-content: space-evenly;
        animation: spin 10s linear infinite;
    }
    .rotter-2 {
        position: absolute;
        display: flex;
        flex-shrink: 0;
        justify-content: space-evenly;
        animation: spin2 10s linear infinite;
    }
    strong {
        font-size: 7rem;
        line-height: 9rem;
        margin-right: 100px;
    }
    @keyframes spin {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }
    @keyframes spin2 {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0%);
        }
    }
    @media screen and (min-width: 2000px) {
        strong {
            margin-right: 200px;
        }
    }
    @media screen and (max-width: 575px) {
        strong {
            font-size: 4rem;
            line-height: 6rem;
        }
        .tech-stack {
            height: 6rem;
        }
    }
</style>