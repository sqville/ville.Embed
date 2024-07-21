/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.SquareCircle",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M20 4V20H4V4H20M22 2H2V22H22V2M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12 15.31 6 12 6Z",
    OUTLINED : "M18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12M12 8C14.21 8 16 9.8 16 12C16 14.21 14.21 16 12 16C9.8 16 8 14.21 8 12C8 9.8 9.8 8 12 8M20 4H4V20H20V4M22 2V22H2V2H22Z"
  }
});