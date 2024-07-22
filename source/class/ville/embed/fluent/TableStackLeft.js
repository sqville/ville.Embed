/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableStackLeft",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.5 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-13c0-.28.22-.5.5-.5H15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.5Zm4.5-1h2a1 1 0 0 0 1-1v-2h-3v3Zm3-8h-3v4h3V8Zm0-1V5a1 1 0 0 0-1-1h-2v3h3Zm-4 0V4H9v3h3ZM9 8v4h3V8H9Zm0 8h3v-3H9v3Z",
    FILLED : "M3 16.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0v13ZM17 5v2h-4V3h2a2 2 0 0 1 2 2Zm-5-2v4H8V3.5c0-.28.22-.5.5-.5H12Zm0 5H8v4h4V8Zm5 4V8h-4v4h4Zm-9 1h4v4H8.5a.5.5 0 0 1-.5-.5V13Zm9 0v2a2 2 0 0 1-2 2h-2v-4h4Z"
  }
});