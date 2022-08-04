function Item(props) {
    return <li className="item" style={props.style}>{props.children}  <a href="#" onClick={props.onRemoveItem}>clear </a></li>;
}

class List extends Component {
    constructor(props) {
        super();
        this.state = {
            list: [
                {
                    text: 'test1',
                    color: 'pink'
                },
                {
                    text: 'test2',
                    color: 'orange'
                },
                {
                    text: 'test3',
                    color: 'yellow'
                }
            ]
        }
    }

    handleItemRemove(index) {
        this.setState({
            list: this.state.list.filter((item, i) => i !== index)
        });
    }
    
    handleAdd() {
        this.setState({
            list: [
                ...this.state.list, 
                {
                    text: isNaN(this.ref.value)?  <span>输入非数字</span>: <span>输入为数字</span>,
                    color:isNaN(this.ref.value)?  'pink': 'yellow'
                }
            ]
        });
    }

    handleLoop() {
        for(let i = 0; i < 5; i++) {
            this.setState({
                list: [
                    ...this.state.list, 
                    
                    {
                        text:i,
                        color:'orange'
                    }
                ]
            });
        }
        
    }

    render() {
        return <div>
            <ul className="list">
                {this.state.list.map((item, index) => {
                    return <Item style={{ background: item.color, color: this.state.textColor}} onRemoveItem={() => this.handleItemRemove(index)}>{item.text}</Item>
                })}
            </ul>
            <div>
                <input ref={(ele) => {this.ref = ele}}/>
                <button onClick={this.handleAdd.bind(this)}>add</button>
                <button onClick={this.handleLoop.bind(this)}>loop</button>
            </div>
        </div>;
    }
}

render(<List textColor={'#000'}/>, document.getElementById('root'));
