/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PresenceAvailable",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm12.2-3.2a1 1 0 0 1 0 1.4l-4.5 4.5a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.4L9 10.58l3.8-3.8a1 1 0 0 1 1.4 0Z",
    FILLED : "M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm4.2-11.8-4.5 4.5a1 1 0 0 1-1.4 0l-2-2a1 1 0 1 1 1.4-1.4L9 10.58l3.8-3.8a1 1 0 1 1 1.4 1.42Z"
  }
});