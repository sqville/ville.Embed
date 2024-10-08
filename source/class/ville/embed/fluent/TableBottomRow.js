/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableBottomRow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9ZM4 13v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4Zm4 3h4v-3H8v3Zm5 0h1.5c.78 0 1.42-.6 1.5-1.36V13h-3v3Zm3-4V5.5c0-.78-.6-1.42-1.36-1.5H5.5c-.78 0-1.42.6-1.5 1.36V12h12Z",
    FILLED : "M14.5 3A2.5 2.5 0 0 1 17 5.5V12h-1V5.5c0-.78-.6-1.42-1.36-1.5H5.5c-.78 0-1.42.6-1.5 1.36V12H3V5.5A2.5 2.5 0 0 1 5.5 3h9ZM17 14.5a2.5 2.5 0 0 1-2.5 2.5H13v-4h4v1.5Zm-13 2c.42.31.94.5 1.5.5H7v-4H3v1.5c0 .82.4 1.54 1 2ZM8 13h4v4H8v-4Z"
  }
});