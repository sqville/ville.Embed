/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailList",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.5 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm-7-2h5.59a1.5 1.5 0 0 0 0 1H4.5C3.67 5 3 5.67 3 6.5v.3l7 4.12L14.96 8h1.97l-6.68 3.93a.5.5 0 0 1-.42.04l-.08-.04L3 7.96v6.54c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8h.5c.18 0 .34-.03.5-.09v6.59a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4Z",
    FILLED : "M11.5 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm-7-2h5.59a1.5 1.5 0 0 0 .3 1.5A1.5 1.5 0 0 0 11.5 8h3.45L10 10.92l-7.98-4.7A2.5 2.5 0 0 1 4.5 4Zm5.75 7.93L16.93 8h.57c.18 0 .34-.03.5-.09v6.59a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.37l7.75 4.56c.15.1.35.1.5 0Z"
  }
});