/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LeafOne",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m11.07 2.46 3.24 3.3A6.03 6.03 0 0 1 10.5 16v1.5a.5.5 0 1 1-1 0V16A6.03 6.03 0 0 1 5.69 5.76l3.24-3.3a1.5 1.5 0 0 1 2.14 0Zm-.57 12.53a5.03 5.03 0 0 0 3.1-8.52l-3.24-3.31a.5.5 0 0 0-.72 0L6.4 6.46A5.03 5.03 0 0 0 9.5 15v-5.5a.5.5 0 1 1 1 0V15Z",
    FILLED : "M11.07 2.46a1.5 1.5 0 0 0-2.14 0l-3.24 3.3a6.03 6.03 0 0 0 .06 8.5v.01a5.98 5.98 0 0 0 3.75 1.74v1.49a.5.5 0 1 0 1 0V16c1.36-.1 2.7-.68 3.74-1.73h.01l.01-.02a6.03 6.03 0 0 0 .05-8.48l-3.24-3.3ZM10.5 15c-.33.03-.67.03-1 0V9.5a.5.5 0 1 1 1 0V15Z"
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