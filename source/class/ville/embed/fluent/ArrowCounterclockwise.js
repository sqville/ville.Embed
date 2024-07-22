/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowCounterclockwise",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16 10A6 6 0 0 0 5.53 6H7.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.6a7 7 0 1 1-1.98 4.36.5.5 0 0 1 1 .08L4 10a6 6 0 0 0 12 0Z",
    FILLED : "M16 10a6 6 0 0 0-9.97-4.5h1.22a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.16a7.5 7.5 0 1 1-2.5 5.31.75.75 0 1 1 1.5.06V10a6 6 0 0 0 12 0Z"
  }
});