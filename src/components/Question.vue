<template>
  <div class="px-5">
    <h3 class="title is-3">
      Question {{question.questionNo + 1}} <span class="tag is-medium is-primary">{{isMultiSelect? 'Select Multiple': 'Select One'}}</span>
      <div class="is-pulled-right">
        <button class="button is-dark" @click="prev()">Prev</button>

        <button class="button is-dark" @click="next()">Next</button>

        <button class="button is-dark" @click="submit(question)">{{ submited ? 'Explain' :'Submit'}}</button>
      </div>
    </h3>
    <div class="question-text notification box content">{{question.questionText}}</div>
    <div>
      <div
        class="column option is-full notification box"
        v-for="(option, index) in question.options"
        :key="index"
        :class="{ 'wrong': submited &&  activeIndex[index] == !option.isCorrect && !option.isCorrect,'correct': submited && option.isCorrect, 'active': !submited &&  activeIndex[index] }"
        @click="toggleSelect(index)"
      ><span class="option-numbers">{{index + 1}}</span> {{option.text.replace('(Correct)','')}}</div>
    </div>
    <br />

    <br />
    <br />
    <b-modal v-model="isImageModalActive">
      <div class="card content px-5" v-show="isImageModalActive" v-html="format(question.explain)">

      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { QuestionModel } from "@/models/question-model";

@Component
export default class Question extends Vue {
  @Prop({ required: true }) private question!: QuestionModel;
  @Prop() next!: Function;
  @Prop() prev!: Function;
  isMultiSelect = false;
  isImageModalActive = false;
  activeIndex: Record<number, boolean> = {} ;
  submited = false;
  isCorrectAnswer = true;


  mounted() {
    this.isMultiSelect = this.question.options.filter(x => { return x.isCorrect}).length > 1;
  }

  toggleSelect(index: number){
    if (this.submited){return}
    if(!this.isMultiSelect){
      Object.keys(this.activeIndex).forEach((i)=> this.activeIndex[parseInt(i)]= false);
    }

    Vue.set(this.activeIndex , index, this.activeIndex[index] === undefined ? true: !this.activeIndex[index]);
  }

  submit() {
    if (!this.submited) {
        this.submited = true;
        this.question.options.forEach((option , index)=>{
          if(this.activeIndex[index] == !option.isCorrect){
            this.isCorrectAnswer = false;
          }
        })
    }else{
      this.isImageModalActive = !this.isImageModalActive;
    }
  }

  format(text: string) {
    text = text.replace(/\n/g, "<br />");
    const out = text.split('<br />').map((i)=>{
      const t1 = i;
      i = i.trim().replace(/\s*^-/gm ,'✦');

      if(t1.match(/\s*^-/gm) != null || t1.match(/\s*^\d/gm) != null){
        return `<span class="eli">${i}</span>`
      }
      if(i.split(' ').length < 5){
        const temp = i;
          if( temp.match('(https?://[^ ]*)') != null){
            return `<a href="${i}">${i}</a>`;
          }
          return `<h2 "eh2">${i}</h2>`
      }
     return `<p class="ep">${i}</p>`
    }
    );
    // console.log(out);


    return out.join(' ');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 10px 0 0;
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

.question-text {
  border: 1px solid #42b983;
}
.button {
  margin: 10px;
}
.option {
  border-left: 30px solid grey;
}
.correct {
  border: 1px solid #42b983;
  border-left: 30px solid #42b983;
}
.wrong {
  border: 1px solid #f04771;
  border-left: 30px solid #f04771;
}
.active {
  border: 1px solid white;
  border-left: 30px solid #42b983;
}
.option-numbers{
    margin-left:-30px;
    color:white;
    margin-right: 12px;
}
::v-deep .eli{
  color: rgb(122, 122, 122);
  // background:red;;
}
::v-deep .eh2{}
::v-deep .ep{
  font-size: 1.1em;
}
</style>
