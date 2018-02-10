<template>
  <div class='wonder'>
    <div class='name'> {{name}}</div>
    <div class='name'> {{text}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  }
</script>
