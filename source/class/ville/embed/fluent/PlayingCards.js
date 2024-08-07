/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PlayingCards",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.07 13a2 2 0 0 0 1.41 2.46l5.46 1.47a2 2 0 0 0 2.45-1.41L16.93 6a2 2 0 0 0-1.41-2.46l-5.46-1.47A2 2 0 0 0 7.6 3.5L5.07 13Zm1.67 1.5a1 1 0 0 1-.7-1.23l2.53-9.52a1 1 0 0 1 1.23-.71l5.46 1.47a1 1 0 0 1 .7 1.23l-2.53 9.52a1 1 0 0 1-1.23.7L6.74 14.5ZM4 10.47 2.67 5.51a2 2 0 0 1 1.41-2.45l.08-.02A3 3 0 0 0 4 4v.19a1 1 0 0 0-.36 1.06L4 6.6v3.86Zm1-1.09V4c0-1.1.9-2 2-2h.1a2.5 2.5 0 0 0-.33.74l-.08.31A1 1 0 0 0 6 4v1.64L5 9.38ZM13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    FILLED : "M5.07 13a2 2 0 0 0 1.41 2.46l5.46 1.47a2 2 0 0 0 2.45-1.41L16.93 6a2 2 0 0 0-1.41-2.46l-5.46-1.47A2 2 0 0 0 7.6 3.5L5.07 13ZM5 4v5.38l1.77-6.64c.07-.27.19-.52.34-.74H7a2 2 0 0 0-2 2ZM2.67 5.5 4 10.48V4a3 3 0 0 1 .16-.96l-.08.02A2 2 0 0 0 2.67 5.5ZM13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
  }
});