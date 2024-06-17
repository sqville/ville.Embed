/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CloudArchive",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 4c2.82 0 4.41 1.92 4.65 4.25h.07c1.24 0 2.32.7 2.88 1.75h-1.21a2.24 2.24 0 0 0-1.67-.75h-.07a1 1 0 0 1-1-.9C13.45 6.32 12.11 5 10 5S6.55 6.32 6.35 8.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 11.62 2.33 2.33 0 0 0 5.28 14H10v1H5.28A3.33 3.33 0 0 1 2 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4Zm0 8a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm8 2h-7v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3Zm-4.5 1h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z",
    FILLED : "M10 4c2.82 0 4.41 1.92 4.65 4.25h.07c1.24 0 2.32.7 2.88 1.75H11a2 2 0 0 0-1 3.73V15H5.28A3.33 3.33 0 0 1 2 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4Zm0 8a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm8 2h-7v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3Zm-4.5 1h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z"
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