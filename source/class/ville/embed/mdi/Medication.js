/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.Medication",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M6 3H18V5H6V3M17 6H7C5.9 6 5 6.9 5 8V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V8C19 6.9 18.1 6 17 6M16 15H13.5V17.5H10.5V15H8V12H10.5V9.5H13.5V12H16V15Z",
    OUTLINED : "M10.5 15H8V12H10.5V9.5H13.5V12H16V15H13.5V17.5H10.5V15M19 8V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V8C5 6.9 5.9 6 7 6H17C18.1 6 19 6.9 19 8M17 8H7V19H17V8M18 3H6V5H18V3"
  }
});