/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowShield",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h5.24c-.25-.3-.47-.63-.66-1H6a2 2 0 0 1-2-2V7h12v1.85c.29.24.63.49 1 .66V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H4Zm10.88 3.16c.5.53 1.48 1.38 2.68 1.55a.5.5 0 0 1 .44.48v2.33c0 3.12-2.78 4.25-3.39 4.46a.34.34 0 0 1-.22 0c-.6-.2-3.39-1.34-3.39-4.46v-2.33c0-.24.2-.44.44-.48a4.95 4.95 0 0 0 2.68-1.55c.2-.21.56-.21.76 0Z",
    FILLED : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.5a4.31 4.31 0 0 1-1-.65V7H4v7c0 1.1.9 2 2 2h4.58c.19.37.41.7.66 1H6a3 3 0 0 1-3-3V6Zm11.88 3.16c.5.53 1.48 1.38 2.68 1.55a.5.5 0 0 1 .44.48v2.33c0 3.12-2.78 4.25-3.39 4.46a.34.34 0 0 1-.22 0c-.6-.2-3.39-1.34-3.39-4.46v-2.33c0-.24.2-.44.44-.48a4.95 4.95 0 0 0 2.68-1.55c.2-.21.56-.21.76 0Z"
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