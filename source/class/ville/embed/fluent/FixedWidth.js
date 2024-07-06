/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FixedWidth",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.5 3c.28 0 .5.22.5.5V5h5.5V3.5a.5.5 0 0 1 1 0V5H16V3.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0V6h-5.5v1.5a.5.5 0 0 1-1 0V6H4v1.5a.5.5 0 0 1-1 0v-4c0-.28.22-.5.5-.5ZM3 11c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Zm7.5 5H15a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4.5v6Zm-1-6H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4.5v-6Z",
    FILLED : "M3.5 3c.28 0 .5.22.5.5V5h5.5V3.5a.5.5 0 0 1 1 0V5H16V3.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0V6h-5.5v1.5a.5.5 0 0 1-1 0V6H4v1.5a.5.5 0 0 1-1 0v-4c0-.28.22-.5.5-.5Zm6 6H5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h4.5V9Zm1 8H15a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4.5v8Z"
  }
});