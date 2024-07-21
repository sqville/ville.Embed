/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.ShieldCross",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M12,1L3,5V11C3,16.5 6.8,21.7 12,23C17.2,21.7 21,16.5 21,11V5L12,1M16,10H13V18H11V10H8V8H11V5H13V8H16V10Z",
    OUTLINED : "M21,11C21,16.5 17.2,21.7 12,23C6.8,21.7 3,16.5 3,11V5L12,1L21,5V11M12,21C15.8,20 19,15.5 19,11.2V6.3L12,3.2L5,6.3V11.2C5,15.5 8.3,20 12,21M16,9H13V6H11V9H8V11H11V19H13V11H16V9Z"
  }
});