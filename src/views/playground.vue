<template>
  <div
    id="staggered-list-demo"
    @mouseleave="ishover = false"
    @mouseenter="ishover = true"
  >
    <div style="height:100px; width:200px; overflow: scroll; border: 1px double black">
      <transition-group
        v-if="!ishover"
        name="staggered-fade"
        tag="div"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <div
          v-for="(item, index) in computedList"
          v-bind:key="item.order"
          v-bind:data-index="index"
          style="height: 1rem"
        >
          {{ "this is a rolling list test " + item.order }}
        </div>
      </transition-group>
      <div
        v-else
        v-for="(item, index) in list"
        :key="index"
        style="height: 1rem"
      >
        {{ "this is a rolling list test " + item.order }}
      </div>
    </div>
  </div>
</template>



<script>
import Velocity from "velocity-animate";
import numberedBoxComponent from "./布局/Components/numberedBoxComponent";

export default {
  data() {
    return {
      list: [
        { msg: "Bruce Lee", order: 1 },
        { msg: "Bruce Lee", order: 2 },
        { msg: "Bruce Lee", order: 3 },
        { msg: "Bruce Lee", order: 4 },
        { msg: "Bruce Lee", order: 5 },
        { msg: "Bruce Lee", order: 6 },
        { msg: "Bruce Lee", order: 7 },
        { msg: "Bruce Lee", order: 8 },
        { msg: "Bruce Lee", order: 9 },
        { msg: "Bruce Lee", order: 10 },
        { msg: "Bruce Lee", order: 11 },
        { msg: "Bruce Lee", order: 12 },
        { msg: "Bruce Lee", order: 13 },
        { msg: "Bruce Lee", order: 14 },
        { msg: "Bruce Lee", order: 15 },
        { msg: "Bruce Lee", order: 16 },
        { msg: "Bruce Lee", order: 17 },
        { msg: "Bruce Lee", order: 18 },
        { msg: "Bruce Lee", order: 19 },
        { msg: "Bruce Lee", order: 20 },
        { msg: "Bruce Lee", order: 21 },
        { msg: "Bruce Lee", order: 22 },
        { msg: "Bruce Lee", order: 23 },
        { msg: "Bruce Lee", order: 24 },
        { msg: "Bruce Lee", order: 25 },
        { msg: "Bruce Lee", order: 26 },
        { msg: "Bruce Lee", order: 27 },
        { msg: "Bruce Lee", order: 28 },
        { msg: "Bruce Lee", order: 29 },
        { msg: "Bruce Lee", order: 30 },
        { msg: "Bruce Lee", order: 31 },
        { msg: "Bruce Lee", order: 32 },
        { msg: "Bruce Lee", order: 33 },
        { msg: "Bruce Lee", order: 34 },
        { msg: "Bruce Lee", order: 35 },
        { msg: "Bruce Lee", order: 36 },
        { msg: "Bruce Lee", order: 37 },
        { msg: "Bruce Lee", order: 38 },
        { msg: "Bruce Lee", order: 39 },
        { msg: "Bruce Lee", order: 40 },
        { msg: "Bruce Lee", order: 41 },
        { msg: "Bruce Lee", order: 42 },
        { msg: "Bruce Lee", order: 43 },
        { msg: "Bruce Lee", order: 44 },
        { msg: "Bruce Lee", order: 45 },
        { msg: "Bruce Lee", order: 46 },
        { msg: "Bruce Lee", order: 47 },
        { msg: "Bruce Lee", order: 48 },
        { msg: "Bruce Lee", order: 49 },
        { msg: "Bruce Lee", order: 50 },
      ],
      ishover: false,
    };
  },
  components: { numberedBoxComponent },
  created() {
    setInterval(() => {
      this.roll();
    }, 1000);
  },
  computed: {
    computedList(el) {
      if (!this.ishover) {
        return this.list.slice(0, 6);
      } else {
        return this.list
      }
    },
  },
  methods: {
    roll: function () {
      if(!this.ishover){
        var t = this.list.pop();
        var that = this;
        setTimeout(() => {
          that.list.unshift(t);
        }, 0);
      }
    },
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function (el, done) {
      // var delay = el.dataset.index * 150;
      // setTimeout(function () {
      Velocity(el, { opacity: 1, height: "1rem" }, { complete: done });
      // }, delay);
    },
    leave: function (el, done) {
      // var delay = el.dataset.index * 150;
      // setTimeout(function () {
      Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      // }, delay);
    },
    // shuffle: function () {
    //   this.items = _.shuffle(this.items);
    // },
    hover: function (Event) {
      console.log("hover", Event);
      if (Event) {
        this.ishover = true;
      } else {
        this.ishover = false;
      }
    },
    handlemouseover(){
      console.log("mouseover");
    }
  },
};
</script>

<style>
.staggered-fade-move {
  /* transition: transform 5s linear; */
}
</style>