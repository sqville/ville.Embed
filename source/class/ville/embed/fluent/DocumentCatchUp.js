/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentCatchUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 2a2 2 0 0 0-2 2v4.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3H4v3c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM7.45 8.3a.5.5 0 0 0-.9-.02L5.18 11H3.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .45-.28l1-2.02 2.09 5a.5.5 0 0 0 .9.02L11.32 12h1.19a.5.5 0 0 0 0-1H11a.5.5 0 0 0-.45.28l-1 2.02-2.09-5Z",
    FILLED : "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5V13h1.5a1.5 1.5 0 0 0 1.34-.83l.04-.07 1.24 2.98a1.5 1.5 0 0 0 2.72.1L11.93 13h.57a1.5 1.5 0 0 0 0-3H11a1.5 1.5 0 0 0-1.34.83l-.04.07-1.24-2.98a1.5 1.5 0 0 0-2.72-.1L4.57 10H4V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM7.46 8.31a.5.5 0 0 0-.9-.03L5.18 11H3.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .45-.28l1-2.02 2.09 5a.5.5 0 0 0 .9.02L11.32 12h1.19a.5.5 0 0 0 0-1H11a.5.5 0 0 0-.45.28l-1 2.02-2.09-5Z"
  }
});