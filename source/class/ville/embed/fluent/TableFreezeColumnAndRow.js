/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableFreezeColumnAndRow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9ZM4 8v4h3V8H4Zm0 5v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4Zm4-1h4V8H8v4Zm4 4v-3H8v3h4ZM4 5.5V7h9v9h1.5c.78 0 1.42-.6 1.5-1.36V5.5c0-.78-.6-1.42-1.36-1.5H5.5c-.78 0-1.42.6-1.5 1.36v.14Z",
    FILLED : "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V12h4V8H4V5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H12v-3H8v4h6.5a2.5 2.5 0 0 0 2.5-2.5v-9Zm-14 9V13h4v4H5.5A2.5 2.5 0 0 1 3 14.5ZM8 8v4h4V8H8Z"
  }
});