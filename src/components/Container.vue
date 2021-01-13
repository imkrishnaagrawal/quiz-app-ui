<template>
  <div class="container">
    <label>Section </label>
    <select v-model="currentSection">
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <Question
      :key="currentQuestion.questionNo"
      :question="currentQuestion"
      :currentQuestionNo="currentQuestionNo"
      :next="next"
      :prev="prev"
      :currentSection="currentSection"
      :sectionSize="sectionSize"
    />
  </div>
</template>

<script lang="ts">
import Question from "./Question.vue";
import { state } from "../store";
import { Component,Watch,  Vue } from "vue-property-decorator";

@Component({
  components: {
    Question,
  },
})
export default class Container extends Vue {
  private questions = state.questions;
  currentQuestionNo = 0;
  currentQuestion = this.questions[0];
  currentRoute = -1;
  currentSection = 0;
  sectionSize = 65;

  @Watch('currentSection')
  onPropertyChanged(value: string) {
      localStorage.setItem(
      "currentSection",
      value.toString()
    );
  }
  mounted() {
    console.log(parseInt(window.location.pathname.replace("/", "")) || -1);
    this.currentRoute =
      parseInt(window.location.pathname.replace("/", "")) - 1 || -1;

    this.currentSection = parseInt(localStorage.getItem("currentSection") || "0");
    this.currentQuestionNo =
      this.currentRoute != -1
        ? this.currentRoute
        : parseInt(localStorage.getItem("currentQuestionNo") || "0") +
          this.sectionSize * this.currentSection;
  }

  update() {
    this.currentQuestion = this.questions[
      this.currentQuestionNo + this.sectionSize * this.currentSection
    ];

    localStorage.setItem(
      "currentQuestionNo",
      this.currentQuestionNo.toString()
    );

  }

  next() {
    if (this.currentQuestionNo < this.questions.length - 1) {
      this.currentQuestionNo += 1;
    } else {
      this.currentQuestionNo = 0;
    }
    this.update();
  }

  prev() {
    if (this.currentQuestionNo > 0) {
      this.currentQuestionNo -= 1;
    } else {
      this.currentQuestionNo =
        this.questions.length - 1 - this.currentQuestionNo;
      console.log(this.questions.length);
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
::v-deep select {
  width: 50px;
  height: 30px;

  &:before {
    content: "Read this: ";
  }
}
</style>
