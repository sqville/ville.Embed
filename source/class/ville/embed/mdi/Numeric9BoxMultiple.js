/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.Numeric9BoxMultiple",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M15,9H13V7H15V9M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M15,5H13A2,2 0 0,0 11,7V9C11,10.11 11.9,11 13,11H15V13H11V15H15A2,2 0 0,0 17,13V7C17,5.89 16.1,5 15,5M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21Z",
    OUTLINED : "M15,9H13V7H15M15,5H13A2,2 0 0,0 11,7V9C11,10.11 11.9,11 13,11H15V13H11V15H15A2,2 0 0,0 17,13V7C17,5.89 16.1,5 15,5M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
  }
});