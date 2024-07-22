/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CircleHalfFill",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 1a7 7 0 0 1 6.98 6.5H3.02A7 7 0 0 1 10 3Z",
    FILLED : "M3.54 9.25h12.92a6.5 6.5 0 0 0-12.92 0ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
  }
});