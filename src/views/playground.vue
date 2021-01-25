<template>
    <div id="staggered-list-demo">
      <transition-group
        name="staggered-fade"
        tag="numberedBoxComponent"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <div
          v-for="(item, index) in computedList"
          v-bind:key="item.order"
          v-bind:data-index="index"
          :numberText="item.order"
        >
          {{ item.msg+item.order }}
        </div>
      </transition-group>
    </div>
</template>



<script>
import Velocity from "velocity-animate";
import numberedBoxComponent from "./布局/Components/numberedBoxComponent"

export default {
  data() {
    return {
      list: [
        { msg: "Bruce Lee",order: 1},
        { msg: "Bruce Lee",order: 2},
        { msg: "Bruce Lee",order: 3},
        { msg: "Bruce Lee",order: 4},
        { msg: "Bruce Lee",order: 5},
        { msg: "Bruce Lee",order: 6},
        { msg: "Bruce Lee",order: 7},
        { msg: "Bruce Lee",order: 8},
        { msg: "Bruce Lee",order: 9},
        { msg: "Bruce Lee",order: 10},
      ],
    };
  },
  components: { numberedBoxComponent },
  created() {
    setInterval(() => {
      this.roll();
    }, 1000);
  },
  computed:{
    computedList(){
      return this.list.slice(1,this.list.length-1)
    }
  },
  methods: {
    roll: function () {
      var t = this.list.pop();
      var that = this;
      setTimeout(() => {
        that.list.unshift(t);
      }, 1000);
    },
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function (el, done) {
      // var delay = el.dataset.index * 150;
      // setTimeout(function () {
        Velocity(el, { opacity: 1, height: "1.6em" }, { complete: done });
      // }, delay);
    },
    leave: function (el, done) {
      // var delay = el.dataset.index * 150;
      // setTimeout(function () {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      // }, delay);
    },
    shuffle: function () {
      this.items = _.shuffle(this.items);
    },
  },
};
</script>

<style>
.staggered-fade-move {
  transition: transform 0.5s linear;
}
</style>