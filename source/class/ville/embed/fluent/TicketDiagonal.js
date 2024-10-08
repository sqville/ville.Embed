/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TicketDiagonal",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12.03 3.24a.75.75 0 0 0-1.06 0l-7.73 7.73c-.3.3-.3.77 0 1.06l.77.77.03.01c.04 0 .08 0 .13-.04a2.25 2.25 0 0 1 3.05 3.05.27.27 0 0 0-.03.14v.03l.78.77c.3.3.77.3 1.06 0l7.73-7.73c.3-.3.3-.77 0-1.06L16 7.19h-.03c-.03 0-.08 0-.13.03a2.24 2.24 0 0 1-3.33-1.97c0-.39.1-.76.28-1.08l.03-.13V4l-.78-.77Zm-1.77-.71c.69-.68 1.8-.68 2.48 0l.77.78c.41.4.34.98.14 1.34a1.25 1.25 0 0 0 1.7 1.7c.36-.2.94-.27 1.35.14l.77.77c.68.69.68 1.8 0 2.48l-7.73 7.73c-.68.68-1.8.68-2.48 0l-.77-.78c-.4-.4-.34-.98-.14-1.34a1.25 1.25 0 0 0-1.7-1.7c-.36.2-.94.27-1.34-.14l-.78-.77a1.75 1.75 0 0 1 0-2.48l7.73-7.73Z",
    FILLED : "M12.74 2.53a1.75 1.75 0 0 0-2.48 0l-7.73 7.73c-.69.69-.69 1.8 0 2.48l.77.77c.41.4.99.34 1.35.14a1.25 1.25 0 0 1 1.7 1.7c-.2.36-.27.94.14 1.34l.77.78c.68.68 1.8.68 2.48 0l7.73-7.73c.68-.69.68-1.8 0-2.48l-.78-.77c-.4-.4-.98-.34-1.34-.14a1.25 1.25 0 0 1-1.7-1.7c.2-.36.27-.94-.14-1.34l-.77-.78Z"
  }
});