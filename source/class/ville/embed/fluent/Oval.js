/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Oval",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 10a6 6 0 0 1 6-6h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6Zm6-5a5 5 0 0 0 0 10h4a5 5 0 0 0 0-10H8Z",
    FILLED : "M2 10a6 6 0 0 1 6-6h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6Z"
  }
});