/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Video360Off",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2.85 2.15a.5.5 0 1 0-.7.7l1.18 1.19A1.7 1.7 0 0 0 2 5.7v8.6a1.7 1.7 0 0 0 1.97 1.68c3.7-.6 7.46-.64 11.17-.13l2 2a.5.5 0 0 0 .71-.7l-1.18-1.19-6.12-6.12-1.39-1.39L6.01 5.3 4.86 4.15l-2-2ZM13 13.7v.9l-1-.06V12.7l1 1ZM10.3 11H9a1 1 0 0 0-1 1v2.55l-1 .06V12H5a1 1 0 0 0-1 1v1.96l-.19.03A.7.7 0 0 1 3 14.3V5.7a.7.7 0 0 1 .81-.7l.58.1 5.9 5.9Zm3.82 1L16 13.88V13a1 1 0 0 0-1-1h-.88Zm2.73 2.73.71.71c.27-.3.44-.7.44-1.14V5.7a1.7 1.7 0 0 0-1.97-1.68c-3.17.51-6.38.62-9.57.32l1.09 1.09c2.88.18 5.78.04 8.64-.42a.7.7 0 0 1 .81.69v8.6a.7.7 0 0 1-.15.43ZM14 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7l1.18 1.19A1.7 1.7 0 0 0 2 5.7v8.6a1.7 1.7 0 0 0 1.97 1.68 37.94 37.94 0 0 1 11.17-.13l2 2a.5.5 0 0 0 .71-.7l-15-15ZM14 14.7l-.99-.09v-.9l1 1Zm-1.99-2v1.85a38.84 38.84 0 0 0-4 0V12a1 1 0 0 1 1-1h1.3l1.7 1.7Zm-8 2.26V13a1 1 0 0 1 1-1h2v2.61c-1 .08-2 .2-3 .35ZM5.5 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8.62 1L6.46 4.34c3.19.3 6.4.2 9.57-.32A1.7 1.7 0 0 1 18 5.7v8.6c0 .44-.17.84-.44 1.14L16 13.88V13a1 1 0 0 0-1-1h-.88Zm.38-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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