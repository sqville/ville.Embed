/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Dust",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.75 3.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 3a4 4 0 0 0-3.91 3.15 4 4 0 1 0 0 7.7A4 4 0 1 0 14.65 10 4 4 0 0 0 12 3ZM9 6.86a3 3 0 1 1 4.55 2.71.5.5 0 0 0 0 .86A3 3 0 1 1 9 13.14a.5.5 0 0 0-.71-.43 3 3 0 1 1 0-5.42.5.5 0 0 0 .71-.43ZM5.75 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    FILLED : "M5.75 3.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.34 2.65A4 4 0 1 1 14.65 10 4 4 0 0 1 12 17a4 4 0 0 1-3.9-3.15 4 4 0 1 1-.01-7.7ZM5.75 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
  }
});