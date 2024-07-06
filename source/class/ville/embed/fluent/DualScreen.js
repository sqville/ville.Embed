/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreen",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 13.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Zm5.5 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V5Zm1 10H16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5v10Z",
    FILLED : "M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V4H4Zm2 9.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10.5 4v12H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5Zm2 9h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z"
  }
});