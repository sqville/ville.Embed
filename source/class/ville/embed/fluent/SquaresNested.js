/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SquaresNested",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm10 4.76A2.99 2.99 0 0 0 14 7h-4a3 3 0 0 0-3 3v4c0 .77.29 1.47.76 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1.76ZM10 16a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4Z",
    FILLED : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1.76A2.99 2.99 0 0 0 15 7h-5a3 3 0 0 0-3 3v5c0 .77.29 1.47.76 2H6a3 3 0 0 1-3-3V6Zm7 11h4a3 3 0 0 0 3-3v-4a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2Z"
  }
});