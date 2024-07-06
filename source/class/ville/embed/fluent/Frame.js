/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Frame",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 2.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1H4v10H2.5a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 1 0V16h10v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16V5h1.5a.5.5 0 0 0 0-1H16V2.5a.5.5 0 0 0-1 0V4H5V2.5ZM15 5v10H5V5h10Z",
    FILLED : "M4.5 2c.28 0 .5.22.5.5V4h10V2.5a.5.5 0 0 1 1 0V4h1.5a.5.5 0 0 1 0 1H16v10h1.5a.5.5 0 0 1 0 1H16v1.5a.5.5 0 0 1-1 0V16H5v1.5a.5.5 0 0 1-1 0V16H2.5a.5.5 0 0 1 0-1H4V5H2.5a.5.5 0 0 1 0-1H4V2.5c0-.28.22-.5.5-.5Z"
  }
});