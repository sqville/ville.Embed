/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PresenceDnd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm4 0a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z",
    FILLED : "M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM7 9h6a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2Z"
  }
});