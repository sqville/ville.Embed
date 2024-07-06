/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Class",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4a2 2 0 0 1 1-1.73V16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2V2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm2-2v6.5a.5.5 0 0 0 .8.4l1.7-1.28 1.7 1.28a.5.5 0 0 0 .8-.4V2H6Zm1 5.5V3h3v4.5l-1.2-.9a.5.5 0 0 0-.6 0L7 7.5Z",
    FILLED : "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3v6.5a.5.5 0 0 1-.8.4L8.5 7.62 6.8 8.9a.5.5 0 0 1-.8-.4V2Zm4 0H7v5.5l1.2-.9a.5.5 0 0 1 .6 0l1.2.9V2Z"
  }
});