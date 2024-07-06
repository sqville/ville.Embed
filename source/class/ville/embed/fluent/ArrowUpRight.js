/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowUpRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 4a.5.5 0 1 1 0-1h8c.28 0 .5.22.5.5v8a.5.5 0 0 1-1 0V4.7L3.85 16.86a.5.5 0 0 1-.7-.7L15.29 4H8.5Z",
    FILLED : "M8 3.75c0-.41.34-.75.75-.75h7.5c.41 0 .75.34.75.75v7.5a.75.75 0 1 1-1.5 0V5.56L4.28 16.78a.75.75 0 0 1-1.06-1.06L14.44 4.5h-5.7A.75.75 0 0 1 8 3.75Z"
  }
});