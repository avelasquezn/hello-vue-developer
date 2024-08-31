<script>
import {Developer} from "../model/developer.entity.js";

export default {
  name: "welcome",
  props: {
    firstName: String,
    lastName: String
  },
  methods: {
    developerName() {
      let developer = new Developer(this.firstName, this.lastName);
      return developer.fullName;
    }
  }
}
</script>

<template>
  <p>Hello {{ developerName() }}. Now You are a Vue Developer!</p>
</template>

<style scoped>

</style>