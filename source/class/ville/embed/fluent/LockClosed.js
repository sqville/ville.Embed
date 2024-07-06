/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LockClosed",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 6h1V5a3 3 0 0 1 6 0v1h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm4-3a2 2 0 0 0-2 2v1h4V5a2 2 0 0 0-2-2Zm6 6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9Z",
    FILLED : "M10 2a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1V5a3 3 0 0 0-3-3ZM8 5a2 2 0 1 1 4 0v1H8V5Zm2 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
  }
});