/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentLandscapeSplit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16 16a2 2 0 0 0 2-2V9.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 12.59 4H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12Zm1-2a1 1 0 0 1-1 1h-6V5h2v3.5c0 .83.67 1.5 1.5 1.5H17v4ZM9 5v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5Zm4 3.5V5.2L16.8 9h-3.3a.5.5 0 0 1-.5-.5Z",
    FILLED : "M12 8.5V4h-2v12h6a2 2 0 0 0 2-2v-4h-4.5A1.5 1.5 0 0 1 12 8.5ZM9 16H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h5v12Zm4-7.5V4.06c.24.07.47.2.65.38l3.91 3.91c.18.18.31.4.38.65H13.5a.5.5 0 0 1-.5-.5Z"
  }
});