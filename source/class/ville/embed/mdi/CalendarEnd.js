/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.CalendarEnd",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M22 14V22H20V18L16 22V19H11V17H16V14L20 18V14H22M5 19L9 19V21L5 21C3.9 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V.998H8V3H16V.998H18V3H19C20.11 3 21 3.89 21 5L21 12H19V8H5V19Z",
    OUTLINED : "M5 9H19V12H21V5C21 3.9 20.1 3 19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H9V19H5V9M19 5V7H5V5H19M16 17H11V19H16V22L20 18L16 14V17M20 14V22H22V14H20Z"
  }
});