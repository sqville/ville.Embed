/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.en.TextDirectionRotate270Right",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.85 5.15a.5.5 0 1 1-.7.7L7 4.71V9.5a.5.5 0 0 1-1 0V4.7L4.85 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2Zm8 0a.5.5 0 1 1-.7.7L15 4.71V16.5a.5.5 0 0 1-1 0V4.7l-1.15 1.15a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2ZM3 13.5c0-.2.13-.4.32-.47l8-3a.5.5 0 0 1 .36.94l-2.68 1v3.06l2.68 1a.5.5 0 0 1-.36.94l-8-3A.5.5 0 0 1 3 13.5Zm1.92 0L8 14.65v-2.3L4.92 13.5Z",
    FILLED : "M4.22 5.22a.75.75 0 0 0 1.06 1.06L6 5.56v3.69a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2Zm7.5 0a.75.75 0 1 0 1.06 1.06l.72-.72v10.69a.75.75 0 1 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2ZM3 13.5c0-.3.19-.58.47-.7l7.5-3a.75.75 0 1 1 .56 1.4L9.5 12v3l2.03.8a.75.75 0 0 1-.56 1.4l-7.5-3a.75.75 0 0 1-.47-.7Zm2.77 0 2.23.9v-1.8l-2.23.9Z"
  }
});