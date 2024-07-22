/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CircleSmall",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    FILLED : "M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }
});