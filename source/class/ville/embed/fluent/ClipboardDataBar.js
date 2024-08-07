/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClipboardDataBar",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Zm7.5 8a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 1 0V12Zm-3-3c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM8 7.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Z",
    FILLED : "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 8.5v2.5a.5.5 0 0 1-1 0V12a.5.5 0 0 1 1 0Zm-3-3c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM8 7.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0Z"
  }
});