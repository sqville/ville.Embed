/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ResizeTable",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 2a3 3 0 0 0-3 3v2.35c.29-.32.62-.6 1-.81V5c0-1.1.9-2 2-2h3.5a.5.5 0 0 0 0-1H5Zm10 16h-2.35c.32-.29.6-.62.81-1H15a2 2 0 0 0 2-2v-3.5a.5.5 0 0 1 1 0V15a3 3 0 0 1-3 3ZM11.5 2a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v3.5a.5.5 0 0 0 1 0V5a3 3 0 0 0-3-3h-3.5ZM5 7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3H5Zm-2 3c0-1.1.9-2 2-2v2H3Zm3 0V8h3v2H6Zm4 0V8a2 2 0 0 1 2 2h-2Zm-4 1h3v3H6v-3Zm4 0h2v3h-2v-3Zm-4 4h3v2H6v-2Zm6 0a2 2 0 0 1-2 2v-2h2Zm-9-4h2v3H3v-3Zm0 4h2v2a2 2 0 0 1-2-2Z",
    FILLED : "M5 2a3 3 0 0 0-3 3v2.35c.29-.32.62-.6 1-.81V5c0-1.1.9-2 2-2h3.5a.5.5 0 0 0 0-1H5Zm10 16h-2.35c.32-.29.6-.62.81-1H15a2 2 0 0 0 2-2v-3.5a.5.5 0 0 1 1 0V15a3 3 0 0 1-3 3ZM11.5 2a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v3.5a.5.5 0 0 0 1 0V5a3 3 0 0 0-3-3h-3.5ZM5 7a3 3 0 0 0-3 3h3V7Zm0 4v3H2v-3h3Zm0 4H2a3 3 0 0 0 3 3v-3Zm1 0h3v3H6v-3Zm0-1h3v-3H6v3Zm4 1h3a3 3 0 0 1-3 3v-3Zm0-4v3h3v-3h-3Zm0-1V7a3 3 0 0 1 3 3h-3ZM6 7h3v3H6V7Z"
  }
});