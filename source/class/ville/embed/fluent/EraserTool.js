/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EraserTool",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.5 2c.28 0 .5.22.5.5V6h12V2.5a.5.5 0 0 1 1 0v12a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 3 14.5v-12c0-.28.22-.5.5-.5Zm.5 9v3.5A2.5 2.5 0 0 0 6.5 17h7a2.5 2.5 0 0 0 2.5-2.5V11H4Zm12-1V7H4v3h12Z",
    FILLED : "M4 2.5a.5.5 0 0 0-1 0v12A3.5 3.5 0 0 0 6.5 18h7a3.5 3.5 0 0 0 3.5-3.5v-12a.5.5 0 0 0-1 0V6H4V2.5ZM4 10V7h12v3H4Z"
  }
});