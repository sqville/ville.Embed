/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Target",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-8 4a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z",
    FILLED : "M10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z"
  }
});