/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextWrap",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5H16a3 3 0 1 1 0 6h-4.3l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 0 1 .7.7l-.64.65H16a2 2 0 1 0 0-4H2.5a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
    FILLED : "M2 4.25c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.25Zm0 5c0-.41.34-.75.75-.75h13a3.25 3.25 0 0 1 0 6.5h-3.4l.23.27a.75.75 0 0 1-1.16.96l-1.25-1.5a.75.75 0 0 1 0-.96l1.25-1.5a.75.75 0 0 1 1.16.96l-.23.27h3.4a1.75 1.75 0 1 0 0-3.5h-13A.75.75 0 0 1 2 9.25Zm0 5c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
  }
});