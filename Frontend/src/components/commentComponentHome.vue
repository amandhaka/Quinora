<template>
  <div>
      <div class='show-comments-container'>
        <span class='comments-hardcode'>Comments</span>
        <div>
            <div v-for="item in commentsData" :key="item.id">
                <table class='t-for-table'>
                    <tr>
                        <td class='show-username'>{{ item.userName.substring(0, 1).toUpperCase() + '' + item.userName.substring(1,item.userName.length) }}</td>
                        <td class='show-date'>{{ item.timeStamp.substring(0,10) }}</td>
                        <td class='show-time'>{{ item.timeStamp.substring(11,16) }}</td>
                    </tr>
                    <tr>
                        <td class='show-comment' colspan="3">{{ item.commentText }}</td>
                    </tr>
                    <tr>
                      <div v-if="item.userName === currentUser">
                        <button class="d-c-btn" id="delete-comment-test" @click="deleteComment(item.commentId)" >Delete</button>
                      </div>
                    </tr>
                </table>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'commentComponentHome',
  data () {
    return {
      currentUser: localStorage.getItem('username')
    }
  },
  methods: {
    deleteComment (id) {
      this.$store.dispatch('deleteCommentAction', id)
    }
  },
  props: {
    commentsData: Array
  }
}
</script>

<style>
  table{
      width: 100%
  }
  .show-comments-container{
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    max-height: 200px;
    overflow: scroll;
  }
  .comments-hardcode{
    font-size: 16px;
    color:gray;
  }
  .show-username{
      font-size: 12px;
      padding-left: 10px;
      font-weight: bold;
      color: gray
  }
  .show-date{
      float: right;
      font-size: 12px;
      padding-left: 10px;
      padding-right: 10px;
      color: lightgray
  }
  .show-time{
      float: right;
      font-size: 12px;
      padding-left: 10px;
      padding-right: 10px;
      color: lightgray
  }
  .show-comment{
      padding-left: 10px;
      font-size: 14px;
  }
  .t-for-table{
      padding: 10px;
      border: 1px solid whitesmoke;
      border-radius: 10px;
      margin-bottom: 5px;
  }
  .d-c-btn{
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    appearance: none;
    font-size: 10px;
    border: 1px solid #4ca7ff;
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-left: 10px;
    color: #4ca7ff;
    cursor: pointer;
  }
  .d-c-btn:focus{
    outline: none;
  }
  .d-c-btn:hover{
    background-color: #4ca7ff;
    color: white;
  }
</style>
