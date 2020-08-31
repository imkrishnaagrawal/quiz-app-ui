<template>
  <div class="container">
      <Question  :key="currentQuestion.questionNo" :question="currentQuestion" :currentQuestion="currentQuestionNo" :next="next" :prev="prev"/>
  </div>

</template>

<script lang="ts">
import Question from './Question.vue';
import { state } from '../store';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
   Question,
  },
})
export default class Container extends Vue {
  private questions = state.questions;
  currentQuestionNo= 0;
  currentQuestion = this.questions[0] ;
  mounted(){
   this.currentQuestionNo =  parseInt(localStorage.getItem('currentQuestionNo') || '0' );
  }

  update(){
    this.currentQuestion = this.questions[this.currentQuestionNo];

    localStorage.setItem('currentQuestionNo', this.currentQuestionNo.toString());
  }

  next(){
    if(this.currentQuestionNo < this.questions.length - 1){
      this.currentQuestionNo += 1;
    }else{
      this.currentQuestionNo = 0;
    }
    this.update();
  }

  prev(){
    if(this.currentQuestionNo > 0){
      this.currentQuestionNo -= 1;
    }else{
      this.currentQuestionNo = (this.questions.length-1) - this.currentQuestionNo;
      console.log(this.questions.length)
    }
    this.update();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
