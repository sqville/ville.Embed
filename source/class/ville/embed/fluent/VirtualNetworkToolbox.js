/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VirtualNetworkToolbox",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.88 6.83a.5.5 0 1 0-.76-.66l-3 3.5a.5.5 0 0 0 0 .66l3 3.5a.5.5 0 1 0 .76-.66L2.16 10l2.72-3.17Zm13.08 4.21c-.06-.3-.16-.57-.31-.82l.2-.22-2.73-3.17a.5.5 0 0 1 .76-.66l3 3.5a.5.5 0 0 1 0 .66l-.67.77a2.48 2.48 0 0 0-.25-.06ZM7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2 1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z",
    FILLED : "M4.84 7.2a.75.75 0 0 0-1.18-.9l-2.5 3.24c-.21.27-.21.65 0 .92l2.5 3.25a.75.75 0 1 0 1.18-.92L2.7 10l2.14-2.8Zm13.12 3.84a2.5 2.5 0 0 0-1.13-1.66l-1.67-2.17a.75.75 0 1 1 1.18-.92l2.5 3.25c.21.27.21.65 0 .92l-.52.68a2.49 2.49 0 0 0-.36-.1ZM7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2 1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"
  }
});