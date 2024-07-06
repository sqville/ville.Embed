/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ResizeSmall",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 4C4.67 4 4 4.67 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1ZM16 5.5c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1Zm0 9c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1Zm-12 0c0 .83.67 1.5 1.5 1.5h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25ZM8.5 7C7.67 7 7 7.67 7 8.5v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3ZM8 8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Z",
    FILLED : "M5.5 4C4.67 4 4 4.67 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1Zm3 3C7.67 7 7 7.67 7 8.5v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3Zm6-3c.83 0 1.5.67 1.5 1.5v1a.5.5 0 0 0 1 0v-1A2.5 2.5 0 0 0 14.5 3h-1a.5.5 0 0 0 0 1h1Zm0 12c.83 0 1.5-.67 1.5-1.5v-1a.5.5 0 0 1 1 0v1a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1 0-1h1Zm-9 0A1.5 1.5 0 0 1 4 14.5v-1.25a.5.5 0 0 0-1 0v1.25A2.5 2.5 0 0 0 5.5 17h1.25a.5.5 0 0 0 0-1H5.5Z"
  }
});