import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'

interface Item {
  text: string;
  complete: boolean;
}
@Component({
  name: 'TodoItem'
})
export default class TodoItem extends Vue {
  @Prop(Object) public readonly item!: Item
  @Prop(Number) public readonly index!: number
  @Prop(Number) public readonly edittingIndex !: number
  public edittingContext = ''
  @Watch('edittingIndex')
  public edittingChange (index) {
    console.log('index', index)
    if (index === this.index) {
      this.edittingContext = this.item.text
    } else {
      this.edittingContext = ''
    }
  }

  public save = () => {
    console.log('edittingContext:', this.edittingContext)
    this.$emit('on-save', {
      index: this.index,
      context: this.edittingContext
    })
  }

  // public edit = () => {
  //   this.$emit('on-edit', {
  //     index: this.index
  //   })
  // }

  @Emit('on-edit')
  public edit () {
    return { index: this.index }
  }

  public change = (e) => {
    this.edittingContext = e.target.value
  }

  protected render () {
    return <li>
      { this.edittingIndex === this.index
        ? <div>
          <input value={this.edittingContext} onChange={this.change}/>
          <button onClick={this.save}>保存</button>
        </div>
        : <div>
          <span>{ this.item.text }</span>
          <button onClick={this.edit}>编辑</button>
        </div>
      }
    </li>
  }
}
