/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.SmartCard",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M2 3H22A2.07 2.07 0 0 1 24 5V19A2.07 2.07 0 0 1 22 21H2A2.07 2.07 0 0 1 0 19V5A2.07 2.07 0 0 1 2 3M8 13.91C6 13.91 2 15 2 17V18H14V17C14 15 10 13.91 8 13.91M8 6A3 3 0 1 0 11 9A3 3 0 0 0 8 6M17 10V13H21V10H17",
    OUTLINED : "M22 3H2A2.07 2.07 0 0 0 0 5V19A2.07 2.07 0 0 0 2 21H22A2.07 2.07 0 0 0 24 19V5A2.07 2.07 0 0 0 22 3M22 19H2V5H22M14 17V15.75C14 14.09 10.66 13.25 9 13.25S4 14.09 4 15.75V17H14M9 7A2.5 2.5 0 1 0 11.5 9.5A2.5 2.5 0 0 0 9 7M15 10V13H19V10H15"
  }
});