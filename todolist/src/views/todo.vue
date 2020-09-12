<template>
  <div class="todo">
    <ul>
      <todo-item
        v-for="(item,index) in list"
        :item="item"
        :index="index"
        :key="index"
        :editting-index="edittingIndex"
        @on-edit="handleEdit"
        @on-save="handleSave"
      >
      </todo-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoItem from '../components/todo_item'

@Component({
  components: {
    TodoItem
  }
})
export default class Todo extends Vue {
  public edittingIndex = -1
  public list = [
    {
      text: '学习《typescript》',
      complete: false
    },
    {
      text: '学习《Vue》',
      complete: false
    }
  ]

  public handleEdit ({ index }) {
    this.edittingIndex = index
  }

  public handleSave ({ context, index }) {
    this.list.splice(index, 1, {
      text: context,
      complete: false
    })
    this.edittingIndex = -1
  }
}
</script>
