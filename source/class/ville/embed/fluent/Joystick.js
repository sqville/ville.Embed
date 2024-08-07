/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Joystick",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm.5 4.96a3 3 0 1 0-1 0V11h-2c-.83 0-1.5.67-1.5 1.5v.5H5a2 2 0 0 0-2 2v2.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V15a2 2 0 0 0-2-2h-1v-.5c0-.83-.67-1.5-1.5-1.5h-2V7.96ZM7.5 12h5c.28 0 .5.22.5.5v.5H7v-.5c0-.28.22-.5.5-.5ZM5 14h10a1 1 0 0 1 1 1v2H4v-2a1 1 0 0 1 1-1Z",
    FILLED : "M10.5 7.96a3 3 0 1 0-1 0V11h-2c-.83 0-1.5.67-1.5 1.5v.5h8v-.5c0-.83-.67-1.5-1.5-1.5h-2V7.96ZM3 16c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V16Z"
  }
});