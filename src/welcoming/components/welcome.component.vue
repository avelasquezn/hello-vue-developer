<script>
/**
 * @name welcome
 * @description
 * This component is responsible for welcoming a new developer.
 * It displays a welcome message with the developer's full name.
 * @prop firstName {String} The developer's first name.
 * @prop lastName {String} The developer's last name.
 * @method developerName {String} Returns the developer's full name.
 */
import {Developer} from "../model/developer.entity.js";

export default {
  name: "welcome",
  props: {
    firstName: String,
    lastName: String
  },
  methods: {
    /**
     * @name developerName
     * @description
     * This method returns the developer's full name.
     * @returns {String} The developer's full name.
     */
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