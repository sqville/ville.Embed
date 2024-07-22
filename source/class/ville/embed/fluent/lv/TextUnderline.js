/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.lv.TextUnderline",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.5 3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0V9h3a3 3 0 1 0 0-6H7.5ZM11 8H8V4h3a2 2 0 1 1 0 4Zm-5.5 8a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z",
    FILLED : "M7.75 3a.75.75 0 0 0-.75.75v9.5a.75.75 0 0 0 1.5 0V9.5h2.75a3.25 3.25 0 0 0 0-6.5h-3.5Zm3.5 5H8.5V4.5h2.75a1.75 1.75 0 1 1 0 3.5ZM5.8 15.55a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5H5.8Z"
  }
});