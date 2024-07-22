/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PortUsbA",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 7C3.67 7 3 7.67 3 8.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11ZM4 8.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5V10H4V8.5Z",
    FILLED : "M4.5 7C3.67 7 3 7.67 3 8.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11Zm0 1.5h11V10h-11V8.5Z"
  }
});