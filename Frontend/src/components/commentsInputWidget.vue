<template>
  <div class="c-div-parent">
      <textarea class="c-div-input" placeholder="Add Comment." v-model="commentText">
      </textarea>
      <div class="c-div-post">
          <button class="c-div-post-btn" @click="onSubmit">Comment</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'commentsInputWidget',
  data () {
    return {
      imageData: '',
      commentText: ''
    }
  },
  props: {
    answerId: Number
  },
  methods: {
    previewImage (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    onSubmit () {
      console.log(this.commentText)
      this.$store.dispatch('setAnswerCommentAction', {
        answerId: this.answerId,
        text: this.commentText
      })
      setTimeout(() => {
        this.$store.dispatch('setQuestionAnswerRequestDataAction', localStorage.getItem('questionId'))
      }, 500)
      this.commentText = ''
    }
  }
}
</script>

<style>
    *{
      outline: none;
    }
    .c-div-parent{
        width: 100%
    }
    .c-div-input{
      width: 100%;
      min-height: 50px;
      border: 1px solid lightgray;
      padding: 10px;
      margin-left: 10px;
      margin-right: 10px;
    }
    .c-div-post{
      border: 1px solid lightgray;
      border-top: 0px;
      margin-top: -6px;
      margin-left: 10px;
      margin-right: -10px;
      margin-bottom: 10px;
    }
    .c-div-post-btn{
      margin-top: 10px;
      padding-left: 10px;
      padding-right: 10px;
      appearance: none;
      border: 1px solid #4ca7ff;
      background: white;
      border-radius: 5px;
      margin-bottom: 10px;
      margin-left: 10px;
      color: #4ca7ff;
      cursor: pointer;
    }
    .c-div-post-btn:focus{
      outline: none;
    }
    .c-div-post-btn:hover{
      background-color: #4ca7ff;
      color: white;
    }
</style>
