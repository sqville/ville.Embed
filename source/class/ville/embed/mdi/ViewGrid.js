/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.ViewGrid",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3",
    OUTLINED : "M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z"
  }
});