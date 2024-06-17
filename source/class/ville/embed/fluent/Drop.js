/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Drop",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.65 2.15c.2-.2.5-.2.7 0 .54.53 1.8 2.06 2.95 3.9 1.13 1.82 2.2 4.05 2.2 5.95 0 1.84-.53 3.35-1.5 4.4a5.3 5.3 0 0 1-4 1.6c-1.61 0-3-.54-4-1.6A6.29 6.29 0 0 1 4.5 12c0-1.9 1.07-4.13 2.2-5.95a25.3 25.3 0 0 1 2.95-3.9Zm-2.1 4.43C6.43 8.38 5.5 10.4 5.5 12c0 1.66.47 2.9 1.24 3.72A4.3 4.3 0 0 0 10 17a4.3 4.3 0 0 0 3.26-1.28A5.3 5.3 0 0 0 14.5 12c0-1.6-.93-3.62-2.05-5.42A26.85 26.85 0 0 0 10 3.24c-.59.67-1.56 1.9-2.45 3.34Z",
    FILLED : "M9.65 2.15c.2-.2.5-.2.7 0 .54.53 1.8 2.06 2.95 3.9 1.13 1.82 2.2 4.05 2.2 5.95 0 1.84-.53 3.35-1.5 4.4a5.3 5.3 0 0 1-4 1.6c-1.61 0-3-.54-4-1.6A6.29 6.29 0 0 1 4.5 12c0-1.9 1.07-4.13 2.2-5.95a25.3 25.3 0 0 1 2.95-3.9Z"
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