/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FlagClock",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 13h4.2c.1-.35.24-.68.4-1H5V4h10.57l-2.49 3.72a.5.5 0 0 0 0 .56l.53.8A5.54 5.54 0 0 1 14.77 9L14.1 8l2.82-4.22A.5.5 0 0 0 16.5 3h-12a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V13Zm14 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z",
    FILLED : "M5 13h4.2a5.5 5.5 0 0 1 5.57-4l-.67-1 2.82-4.22A.5.5 0 0 0 16.5 3h-12a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V13Zm14 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z"
  }
});