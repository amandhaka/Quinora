<template>
  <div class="conatiner">
      <div class="answer">
          <b>Answer:</b> {{ answer }}
      </div>
      <div class="answer-image">
        <img :src="src" width="300px" class="image-css" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'answerComponentHome',
  props: {
    answer: String,
    src: String
  }
}
</script>

<style scoped>
    .answer{
        display: block;
        padding: 10px;
        width: 100%;
    }
    .answer-image{
        text-align: center;
        padding: 10px;
        background: whitesmoke;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .container{
        padding: 10px;
        margin: 10px;
        border: 1px solid whitesmoke;
        border-radius: 10px;
    }
    .image-css{
        border-radius: 10px;
    }
</style>
