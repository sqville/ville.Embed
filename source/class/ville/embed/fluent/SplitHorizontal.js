/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SplitHorizontal",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.5 10a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1h15ZM16 4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4h1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4h1V4Zm0 7h-1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4H4v4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-4Z",
    FILLED : "M17.5 10a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1h15ZM14 2a2 2 0 0 1 2 2v4H4V4c0-1.1.9-2 2-2h8ZM4 11v4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-4H4Z"
  }
});