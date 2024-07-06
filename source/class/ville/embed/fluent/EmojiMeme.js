/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EmojiMeme",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.25 5a7.99 7.99 0 0 0-12.5 0H5.1a6.98 6.98 0 0 1 9.8 0h1.35Zm1.69 6h-1.01A7 7 0 0 1 3 10H2a8 8 0 0 0 15.94 1ZM3 6h15v2h-1v2h-1v1h-4v-1h-1V8h-1v2H9v1H5v-1H4V8H2V7h1V6ZM1 9V8h1v1H1Zm0 0v2H0V9h1Zm4-1v1h1V8H5Zm1 1v1h1V9H6Zm6-1v1h1V8h-1Zm1 1v1h1V9h-1Zm-6.11 3.51a.5.5 0 1 0-.78.63 5 5 0 0 0 7.78 0 .5.5 0 1 0-.78-.63 4 4 0 0 1-6.22 0Z",
    FILLED : "M10 2a7.99 7.99 0 0 1 6.25 3H3.75A7.99 7.99 0 0 1 10 2Zm7 9h.94A8 8 0 0 1 2 10h1v1h1v1h6v-1h1v1h6v-1ZM6.19 13.44a.5.5 0 0 0-.08.7 5 5 0 0 0 7.78 0 .5.5 0 1 0-.78-.63 4 4 0 0 1-6.22 0 .5.5 0 0 0-.7-.07ZM18 6H3v1H2v1H1v1H0v2h1V9h1V8h2v2h1v1h4v-1h1V8h1v2h1v1h4v-1h1V8h1V6ZM6 8v1h1v1H6V9H5V8h1Zm7 0v1h1v1h-1V9h-1V8h1Z"
  }
});