/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Pipeline",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 5.5a1.5 1.5 0 1 1 3 0V6h10v-.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3 0V14H5v.5a1.5 1.5 0 0 1-3 0v-9Zm2 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9ZM15 7H5v6h10V7Zm2-1.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9Z",
    FILLED : "M2 5.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3 0v-9Zm13 0v9a1.5 1.5 0 0 0 3 0v-9a1.5 1.5 0 0 0-3 0ZM14 14V6H6v8h8Z"
  }
});