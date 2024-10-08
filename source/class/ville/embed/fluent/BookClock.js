/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookClock",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-4 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-1.5a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5H11a.5.5 0 0 0 0-1h-1V7.5Z",
    FILLED : "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-.5-6c.28 0 .5.22.5.5V9h1a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5Z"
  }
});