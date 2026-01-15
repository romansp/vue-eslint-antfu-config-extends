<script setup lang="ts">

</script>

<template>
  <!-- Wrong classes order to trigger "enforce-consistent-class-order" warning -->
  <!-- and "w-4 h-4" to indicate "enforce-shorthand-classes" is turned off per config -->
  <h1 class="rounded-lg bg-red-400 p-4 text-white text-xl w-4 h-4">
    You did it!
  </h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>
