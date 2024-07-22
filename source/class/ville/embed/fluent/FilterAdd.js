/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FilterAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 9.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.15-.35ZM9.02 5H3.41a.5.5 0 0 0 .09 1h5.52a5.57 5.57 0 0 1 0-1Zm1.24 4H5.4a.5.5 0 0 0 .09 1h5.84c-.4-.28-.77-.62-1.08-1ZM7.4 13h5.09a.5.5 0 0 1 .09 1H7.5a.5.5 0 0 1-.09-1Z",
    FILLED : "M17 9.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.15-.35ZM9.02 5a5.57 5.57 0 0 0 .07 1.5H3.75a.75.75 0 0 1 0-1.5h5.27Zm1.46 4.25a5.5 5.5 0 0 0 2.38 1.5H5.75a.75.75 0 0 1 0-1.5h4.73Zm1.77 4.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5Z"
  }
});