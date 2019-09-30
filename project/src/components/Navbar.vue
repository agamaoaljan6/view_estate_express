<template>
  <div class="nav">
    <Slide right>
      <a href>
        <span>Home</span>
      </a>
      <a href>
        <span>Properties</span>
      </a>
      <a href>
        <span>For Buyers</span>
      </a>
      <a href>
        <span>For Sellers</span>
      </a>
      <a href>
        <span>About Us</span>
      </a>
      <a href>
        <span>Contact Us</span>
      </a>
    </Slide>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide
  }
};
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
.bm-item-list {
  text-align: center;
  align-items: center;
}
.bm-item-list a:hover {
  text-align: center;
  background: #333;
  width: 143px;
}
</style>