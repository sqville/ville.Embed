/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PaintBrush",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 2a.5.5 0 0 0-.5.5V11c0 1.1.9 2 2 2h1v3a2 2 0 1 0 4 0v-3h1a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5h-9Zm.5 8h8v1a1 1 0 0 1-1 1h-1.5a.5.5 0 0 0-.5.5V16a1 1 0 1 1-2 0v-3.5a.5.5 0 0 0-.5-.5H7a1 1 0 0 1-1-1v-1Zm8-1H6V3h4v1.5a.5.5 0 0 0 1 0V3h1v2.5a.5.5 0 0 0 1 0V3h1v6Z",
    FILLED : "M10 4.5V2H5.5a.5.5 0 0 0-.5.5V9h10V2.5a.5.5 0 0 0-.5-.5H13v3.5a.5.5 0 0 1-1 0V2h-1v2.5a.5.5 0 0 1-1 0Zm5 5.5H5v1c0 1.1.9 2 2 2h1.5v3.5a1.5 1.5 0 1 0 3 0V13H13a2 2 0 0 0 2-2v-1Z"
  }
});