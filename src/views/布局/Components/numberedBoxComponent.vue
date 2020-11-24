<template>
<div class="box">
    <h1 class="textOfBox"> {{ numbertext }}</h1>
</div>
</template>

<script>

export default {
    name:'numberedBoxComponent',
    props:['numbertext']
}
</script>

<style>
.box{
    height: 100px;
    width: 100px;
    background-color: #1abc9c;
    margin: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.textOfBox{
    position: absolute;
}
</style>