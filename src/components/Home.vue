<template>
  <div>
    <img alt="Hero logo" src="./../assets/hero.svg">
    <Congrats
        title="My defender congrats to you!"
        wishes="I wish you courage, steadfastness! Let all your dreams and ideas come true! Success, happiness and
          health to you!"
        signature="Your K. with love <3"
    />
  </div>
</template>

<script>
import Congrats from "./Congrats";
export default {
  name: 'Home',
  components: { Congrats }
}
</script>
