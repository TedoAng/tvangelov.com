<script setup>
import Logo from '../assets/logo.svg'
</script>

<template>
    <div class="flex-container my-5">
        <div class="unit">
            <div class="pole-unit vary">
                <div class="pole-top">
        <!-- 			<div class="ball"></div> -->
                    <div class="cover"></div>
                    <div class="band"></div>
                    <div class="thin-band"></div>
                </div>
                <div class="pole-middle">
                    <div class="containerX">
                        <div class="pole"></div>
                    </div>
                </div>
                <div class="pole-bottom">
                    <div class="thin-band"></div>
                    <div class="band"></div>
                    <div class="cover"></div>
        <!-- 			<div class="ball"></div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.flex-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .unit {
    padding: 0 60px;
  }
  .shadow {
    width: 80px;
    height: 15px;
    border-radius: 40%;
    margin: 30px auto;
    background-color: rgba(0,0,0,0.05);
  }
  .pole-top,
  .pole-middle,
  .pole-bottom {
    display: block;
    width: 100%;
    text-align: center;
  }
  .ball {
    position: relative;
    width: 24px;
    height: 24px;
    margin: auto;
    border: 4px solid #4b4c4d;
    border-radius: 50%;
    background-color: #fafafa;
  }
  .ball:after {
    content: '';
    display: block;
    width: 4px;
    height: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #4b4c4d;
  }
  .pole-top .ball {
    margin-bottom: 5px;
  }
  .pole-top .ball:after {
    top: 18px;
  }
  .pole-bottom .ball {
    margin-top: 5px;
  }
  .pole-bottom .ball:after {
    bottom: 18px;
  }
  .cover {
    width: 80px;
    height: 36px;
    margin: 0 auto;
    position: relative;
    border: 4px solid #4b4c4d;
    background-color: #fafafa;
    overflow: hidden;
  }
  .cover:before {
    content: '';
    border-radius: inherit;
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 12;
    border-right-style: solid;
    border-left-style: solid;
    border-right-width: 6px;
    border-right-color: rgba(120,120,120,0.1);
    border-left-width: 10px;
    border-left-color: rgba(60,60,60,0.1);
  }
  .pole-top .cover {
    margin-bottom: -8px;
    border-radius: 36px 36px 0 0;
    border-bottom-width: 0;
  }
  .pole-bottom .cover {
    margin-top: -8px;
    border-radius: 0 0 36px 36px;
    border-top-width: 0;
  }
  .band {
    position: relative;
    width: 96px;
    height: 24px;
    margin: 0 auto;
    z-index: 10;
    border: 4px solid #4b4c4d;
    background-color: #fafafa;
    border-radius: 6px;
  }
  .band:before {
    content: '';
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 12;
    border-right-style: solid;
    border-left-style: solid;
    border-right-width: 6px;
    border-right-color: rgba(120,120,120,0.1);
    border-left-width: 12px;
    border-left-color: rgba(60,60,60,0.1);
  }
  .thin-band {
    width: 82px;
    height: 8px;
    margin: 0 auto;
    box-sizing: content-box;
    border: 4px solid #4b4c4d;
    background-color: #fafafa;
  }
  .thin-band:before {
    content: '';
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 12;
    border-right-style: solid;
    border-left-style: solid;
    border-right-width: 6px;
    border-right-color: rgba(120,120,120,0.1);
    border-left-width: 12px;
    border-left-color: rgba(60,60,60,0.1);
  }
  .pole-top .thin-band {
    border-radius: 0 0 4px 4px;
    border-top-width: 0;
  }
  .pole-bottom .thin-band {
    border-radius: 4px 4px 0 0;
    border-bottom-width: 0;
  }
  .containerX {
    width: 80px;
    height: 144px;
    margin: 0 auto;
    position: relative;
    border: 4px solid #4b4c4d;
    border-top-width: 0;
    border-bottom-width: 0;
    background-color: transparent;
  }
  .containerX:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 15%;
    left: 50%;
    z-index: 15;
    background-image: linear-gradient(to left, rgba(255,255,255,0.8), rgba(255,255,255,0.8) 33.33%, rgba(255,255,255,0.2) 33.33%, rgba(255,255,255,0.2) 100%);
  }
  .pole {
    width: 64px;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
    background-repeat: repeat-y;
    background-size: 100% 88px;
    background-position: 0% 0%;
    animation: spin 4s linear infinite;
  }
  .pole:before {
    content: '';
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 12;
    border-right-style: solid;
    border-left-style: solid;
    border-right-width: 10px;
    border-right-color: rgba(120,120,120,0.1);
    border-left-width: 14px;
    border-left-color: rgba(60,60,60,0.1);
  }
  .mono .pole {
    background-image: repeating-linear-gradient(-25deg, #fff, #fff 20px, #df5646 20px, #df5646 40px, #fff 40px, #fff 60px, #1c78a4 60px, #1c78a4 80px);
  }
  .vary .pole {
    background-image: repeating-linear-gradient(-25deg, #fff, #fff 10px, #df5646 10px, #df5646 40px, #fff 40px, #fff 50px, #1c78a4 50px, #1c78a4 80px);
  }
  @-moz-keyframes spin {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 0% 176px;
    }
  }
  @-webkit-keyframes spin {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 0% 176px;
    }
  }
  @-o-keyframes spin {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 0% 176px;
    }
  }
  @keyframes spin {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 0% 176px;
    }
  }
</style>
