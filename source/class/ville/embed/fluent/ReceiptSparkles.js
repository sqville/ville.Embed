/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ReceiptSparkles",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.23 1.35 14.88.28a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4Zm3.79 6.61.76.25h.02a.3.3 0 0 1 0 .58l-.77.25a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.58 1.58 0 0 0-1-1l-.77-.25a.3.3 0 0 1 0-.57l.77-.25a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.57 1.57 0 0 0 1 1ZM14 8.5a1.3 1.3 0 0 1 0-.43v-.21c-.14-.05-.27-.11-.39-.2-.21-.17-.37-.4-.46-.66L13 6.49V16H6a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1h5.1c-.06-.16-.1-.33-.1-.5 0-.17.04-.34.1-.5H5a2 2 0 0 0-2 2v9a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1.5a.5.5 0 0 0-.5-.5H14V8.5Zm0 4.5h2v1a2 2 0 0 1-2 2v-3ZM6 6.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z",
    FILLED : "M15.23 1.35 14.88.28a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4Zm3.79 6.61.76.25h.02a.3.3 0 0 1 0 .58l-.77.25a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.58 1.58 0 0 0-1-1l-.77-.25a.3.3 0 0 1 0-.57l.77-.25a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.57 1.57 0 0 0 1 1ZM14 8.5V12h2.5c.28 0 .5.22.5.5V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5c0-1.1.9-2 2-2h5.1c-.06.16-.1.33-.1.5a1.42 1.42 0 0 0 1 1.34l1.1.36a1 1 0 0 1 .4.23l.06.06c.11.1.2.24.26.38L13.15 7c.09.26.25.49.46.66.12.09.25.15.39.2v.21a1.3 1.3 0 0 0 0 .43Zm0 7.5a2 2 0 0 0 2-2v-1h-2v3ZM6.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z"
  }
});