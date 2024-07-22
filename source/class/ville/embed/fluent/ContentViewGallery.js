/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ContentViewGallery",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6Zm0 1h3v2H6V7Zm-1 4.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm8 10V4H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5Zm3 0a2 2 0 0 0 2-2v-1h-4v3h2Zm2-9V6a2 2 0 0 0-2-2h-2v3h4Zm0 5V8h-4v4h4Z",
    FILLED : "M9 7H6v2h3V7ZM3 6a3 3 0 0 1 3-3h6v14H6a3 3 0 0 1-3-3V6Zm2 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Zm.5 4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM5 13.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm8 3.5h1a3 3 0 0 0 3-3v-1h-4v4Zm4-5V8h-4v4h4Zm0-5V6a3 3 0 0 0-3-3h-1v4h4Z"
  }
});