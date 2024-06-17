/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingTownhouse",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.1 3.24a1 1 0 0 1 1.3 0L9.97 5.4l.03.03.03-.03 2.57-2.17a1 1 0 0 1 1.3 0l2.57 2.17c.34.28.53.7.53 1.15v8.94c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5V6.56c0-.45.2-.87.53-1.15L6.1 3.24ZM10.5 13h2c.28 0 .5.22.5.5V16h2.5a.5.5 0 0 0 .5-.5V6.56a.5.5 0 0 0-.18-.39L13.25 4l-2.57 2.17a.5.5 0 0 0-.18.39V13Zm-1 0V6.56a.5.5 0 0 0-.18-.39L6.75 4 4.18 6.17a.5.5 0 0 0-.18.39v8.94c0 .28.22.5.5.5H7v-2.5c0-.28.22-.5.5-.5h2ZM8 16h1.5v-2H8v2Zm2.5-2v2H12v-2h-1.5ZM6.75 8.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.75-2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    FILLED : "M6.96 3.3a1 1 0 0 0-1.42 0l-2.1 2.1A1.5 1.5 0 0 0 3 6.44v9.05c0 .83.67 1.5 1.5 1.5H7v-3.5c0-.28.22-.5.5-.5h2V6.45c0-.4-.16-.78-.44-1.06l-2.1-2.1Zm3.54 3.15V13h2c.28 0 .5.22.5.5V17h2.5c.83 0 1.5-.67 1.5-1.5V6.45c0-.4-.16-.78-.44-1.06l-2.1-2.1a1 1 0 0 0-1.42 0l-2.1 2.1a1.5 1.5 0 0 0-.44 1.06Zm0 7.55v3H12v-3h-1.5Zm-1 3v-3H8v3h1.5ZM7 7.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm8.25-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});