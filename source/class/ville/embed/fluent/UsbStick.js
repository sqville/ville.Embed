/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.UsbStick",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.5 2h5c.28 0 .5.22.5.5V6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2V2.5c0-.28.22-.5.5-.5ZM12 6V3H8v3h4ZM7 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7Z",
    FILLED : "M7 2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2V2.5ZM8 6h4V3H8v3Z"
  }
});