/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Record",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 14.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    FILLED : "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8 4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
  }
});