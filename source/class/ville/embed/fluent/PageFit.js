/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PageFit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 6C4.67 6 4 6.67 4 7.5v1a.5.5 0 0 0 1 0v-1c0-.28.22-.5.5-.5h1a.5.5 0 0 0 0-1h-1Zm8 0a.5.5 0 0 0 0 1h1c.28 0 .5.22.5.5v1a.5.5 0 0 0 1 0v-1c0-.83-.67-1.5-1.5-1.5h-1ZM5 11.5a.5.5 0 0 0-1 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 1-.5-.5v-1Zm11 0a.5.5 0 0 0-1 0v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1c.83 0 1.5-.67 1.5-1.5v-1ZM2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm1 0v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Zm2.5 0C4.67 6 4 6.67 4 7.5v1a.5.5 0 0 0 1 0v-1c0-.28.22-.5.5-.5h1a.5.5 0 0 0 0-1h-1ZM5 11.5a.5.5 0 0 0-1 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 1-.5-.5v-1Z",
    FILLED : "M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm1.5 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1C4 6.67 4.67 6 5.5 6Zm8 0h1c.83 0 1.5.67 1.5 1.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1ZM5 11.5v1c0 .28.22.5.5.5h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 1 4 12.5v-1a.5.5 0 0 1 1 0Zm11 0v1c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0Z"
  }
});