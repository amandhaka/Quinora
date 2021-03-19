<template>
  <div class="ques-conatiner">
      <div class="ques-category">
        <table>
          <tr>
            <td class="ques-left">Category: <b>{{ category }}</b></td>
          </tr>
        </table>
      </div>
      <div class="question">
        <a class='remove-default-css-a'><p :id="id" @click="goToQuestions">Question: {{ question }}</p></a>
      </div>
      <div class="question-image">
        <img :src="src" width="300px" class="image-css" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'questionComponentSearch',
  data () {
    return {
    }
  },
  props: {
    question: {
      type: String,
      default: 'This is my question.'
    },
    category: {
      type: String,
      default: 'This is my category.'
    },
    src: {
      type: String,
      default: 'This is my image.'
    },
    id: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: String,
      default: '18 Mar 2021 05:29:27'
    }
  },
  methods: {
    goToQuestions (event) {
      this.$store.dispatch('setQuestionAnswerRequestDataAction', event.target.id)
    }
  }
}
</script>

<style scoped>
    .question{
      display: block;
      padding: 10px;
      width: 100%;
      font-weight: bold;
    }
    .question-image{
      text-align: center;
      margin-left: 10px;
      margin-right: 10px;
      background: whitesmoke;
      border-radius: 10px;
    }
    .ques-category{
      margin: 10px;
      border: 1px solid whitesmoke;
      border-radius: 10px;
      padding: 10px;
      font-size: 10px;
    }
    .ques-container{
      margin: 10px;
      border: 1px solid whitesmoke;
      border-radius: 10px;
    }
    .image-css{
      border-radius: 10px;
    }
    .remove-default-css-a{
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
    .remove-default-css-a:hover{
      box-shadow: 0 0 10px 1px gray;
    }
    .ques-left{
      float: left;
    }
    .ques-right{
      float: right
    }
</style>
