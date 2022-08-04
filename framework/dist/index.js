function Item(props) {
  return createElement("li", {
    className: "item",
    style: props.style
  }, props.children, "  ", createElement("a", {
    href: "#",
    onClick: props.onRemoveItem
  }, "clear "));
}

class List extends Component {
  constructor(props) {
    super();
    this.state = {
      list: [{
        text: 'test1',
        color: 'pink'
      }, {
        text: 'test2',
        color: 'orange'
      }, {
        text: 'test3',
        color: 'yellow'
      }]
    };
  }

  handleItemRemove(index) {
    this.setState({
      list: this.state.list.filter((item, i) => i !== index)
    });
  }

  handleAdd() {
    this.setState({
      list: [...this.state.list, {
        text: isNaN(this.ref.value) ? createElement("span", null, "\u8F93\u5165\u975E\u6570\u5B57") : createElement("span", null, "\u8F93\u5165\u4E3A\u6570\u5B57"),
        color: isNaN(this.ref.value) ? 'pink' : 'yellow'
      }]
    });
  }

  handleLoop() {
    for (let i = 0; i < 5; i++) {
      this.setState({
        list: [...this.state.list, {
          text: i,
          color: 'orange'
        }]
      });
    }
  }

  render() {
    return createElement("div", null, createElement("ul", {
      className: "list"
    }, this.state.list.map((item, index) => {
      return createElement(Item, {
        style: {
          background: item.color,
          color: this.state.textColor
        },
        onRemoveItem: () => this.handleItemRemove(index)
      }, item.text);
    })), createElement("div", null, createElement("input", {
      ref: ele => {
        this.ref = ele;
      }
    }), createElement("button", {
      onClick: this.handleAdd.bind(this)
    }, "add"), createElement("button", {
      onClick: this.handleLoop.bind(this)
    }, "loop")));
  }

}

render(createElement(List, {
  textColor: '#000'
}), document.getElementById('root'));