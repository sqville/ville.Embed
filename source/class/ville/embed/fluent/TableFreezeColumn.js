/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableFreezeColumn",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 17A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9ZM12 4H8v3h4V4ZM7 4H5.5c-.78 0-1.42.6-1.5 1.36V7h3V4Zm1 4v4h4V8H8Zm-4 4h3V8H4v4Zm4 1v3h4v-3H8Zm-2.5 3H7v-3H4v1.5c0 .78.6 1.42 1.36 1.5h.14Zm9-12H13v12h1.5c.78 0 1.42-.6 1.5-1.36V5.5c0-.78-.6-1.42-1.36-1.5h-.14Z",
    FILLED : "M16 14.5c0 .83-.67 1.5-1.5 1.5H12v-3H8v4h6.5a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3H8v4h4V4h2.5c.83 0 1.5.67 1.5 1.5v9ZM5.5 3H7v4H3V5.5A2.5 2.5 0 0 1 5.5 3ZM7 12V8H3v4h4Zm5-4H8v4h4V8Zm-9 5h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Z"
  }
});