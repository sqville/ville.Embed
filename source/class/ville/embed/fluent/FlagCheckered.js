/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FlagCheckered",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 3.5c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5v10a.5.5 0 0 1-.5.5H6v3.5a.5.5 0 0 1-1 0v-14ZM6 13h3v-3h3v3h3v-3h-3V7h3V4h-3v3H9V4H6v3h3v3H6v3Z",
    FILLED : "M4.5 3.25c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v10.5c0 .41-.34.75-.75.75H6v2.75a.75.75 0 0 1-1.5 0v-14ZM6 13h3v-3h3v3h3v-3h-3V7h3V4h-3v3H9V4H6v3h3v3H6v3Z"
  }
});