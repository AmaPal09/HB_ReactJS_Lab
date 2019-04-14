"use strict";

/* render start */
/*ReactDOM.render(  */
/*  <Hello to="World" from="Balloonicorn" />, */
/*  document.getElementById('root') */
/*); */
/* render end */

/* ReactDOM.render( */
/*   ( */
/*   <div> */
/*   <Hello to="Kay" from="Kim" /> */
/*   <Hello to="me" from="you" /> */
/*   </div> */
/*   ), */
/*  document.getElementById('root') */

/* ); */
/* render end */


/* ReactDOM.render( */
/*     <TodoList />, */
/*     document.getElementById('root') */
/* ); */

ReactDOM.render(
    <div>
    <TodoList />
    <TodoItem item="laundry" important={true}/>
    <TodoItem item="take out trash"important={false}/>
    <TodoItem item="do dishes" important={true}/>
    </div>,
    document.getElementById('root')
);