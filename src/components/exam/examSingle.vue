<template>
    <div class="exam-content">
        <el-card>
            <ul>
                <li v-for="(option, index) in options" :key="index">
                    <el-radio @change="doSelect" v-model="select" :label="option.item">{{option.content}}</el-radio>
                </li>
            </ul>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'examSingle',
        props: {
            optionalAnswer: String,
            reply: Function,
            answer: String
        },
        data() {
            return {
                select: this.answer,
                options: JSON.parse(this.optionalAnswer)
            }
        },
        methods: {
            doSelect() {
                this.reply(this.select)
            }
        },
        watch: {
          answer(newVal, oldVal){
            if (newVal){
              this.select = newVal
            }
          },
          optionalAnswer(newVal, oldVal){
            this.options = JSON.parse(newVal)
          }
        }
    }
</script>

<style scoped>
    li {
        list-style-type: upper-alpha !important;
    }

    .el-card__header {
        float: left;
    }

    /* 题目 */
    .exam-content li {
        padding: 1rem;
        list-style-type: decimal;
        float: left;
        clear: both;
    }

</style>
