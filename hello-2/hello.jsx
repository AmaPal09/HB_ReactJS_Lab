"use strict";

/* component start */ // These comments are for generating handouts!
class Hello extends React.Component {
  render() {
    return <p>Hi {this.props.to} from {this.props.from}</p>;
  }
}
/* component end */


class TodoList extends React.Component {
    render() {
        return <h2> Here is a todo list </h2>
    }
}

class TodoItem extends React.Component {
    render() {
    /*return <li>Here is a todo list item</li>*/
    if (this.props.important) { /*Default value of a property is true*/
        return <li><b>{this.props.item}</b></li>
    } else {
        return <li>{this.props.item}</li>
    }
    }
}

/*     return <div> */
/*         <h2> Here is a todo list </h2> */
/*         <TodoItem item="laundry" important={true}/> */
/*         <TodoItem item="take out trash"important={false}/> */
/*         <TodoItem item="do dishes" important={true}/> */
/*     </div> */