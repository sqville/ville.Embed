/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Mic",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 13a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm0-1a2 2 0 0 1-2-2V5a2 2 0 1 1 4 0v5a2 2 0 0 1-2 2ZM5 9.5c.28 0 .5.22.5.5a4.5 4.5 0 1 0 9 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 1-5 5.48v2.02a.5.5 0 0 1-1 0v-2.02a5.5 5.5 0 0 1-5-5.48c0-.28.22-.5.5-.5Z",
    FILLED : "M5.5 10a.5.5 0 0 0-1 0 5.5 5.5 0 0 0 5 5.48v2.02a.5.5 0 0 0 1 0v-2.02c2.8-.26 5-2.61 5-5.48a.5.5 0 0 0-1 0 4.5 4.5 0 1 1-9 0Zm7.5 0a3 3 0 0 1-6 0V5a3 3 0 0 1 6 0v5Z"
  }
});