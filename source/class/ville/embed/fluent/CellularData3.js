/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CellularData3",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.5 10a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-.99.09V10.5c0-.28.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.41v3.1a.5.5 0 0 1-1 .08V12.5c0-.28.22-.5.5-.5Zm6-4a.5.5 0 0 1 .5.4v7.1a.5.5 0 0 1-1 .09V8.5c0-.28.22-.5.5-.5Z",
    FILLED : "M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.1v-2.6c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.1v-4.6c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 0 1-1.5.11V8.75c0-.41.34-.75.75-.75Z"
  }
});