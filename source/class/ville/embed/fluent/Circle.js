/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Circle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
    FILLED : "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
  }
});