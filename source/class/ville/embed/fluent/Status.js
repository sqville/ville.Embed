/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Status",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.35 2.65a2.62 2.62 0 0 0-3.7 0l-5.5 5.5a.5.5 0 0 0-.14.23l-1 4a.5.5 0 0 0 .61.6l4-1a.5.5 0 0 0 .23-.13l5.5-5.5a2.62 2.62 0 0 0 0-3.7Zm-3 .7a1.62 1.62 0 0 1 2.3 2.3l-5.4 5.4-3.06.76.76-3.05 5.4-5.4ZM10 4c.28 0 .55.02.82.06l.86-.86A7.02 7.02 0 0 0 3 10a7 7 0 1 0 13.8-1.68l-.86.86A6 6 0 1 1 10 4Z",
    FILLED : "M17.35 2.65a2.62 2.62 0 0 0-3.7 0l-5.5 5.5a.5.5 0 0 0-.14.23l-1 4a.5.5 0 0 0 .61.6l4-1a.5.5 0 0 0 .23-.13l5.5-5.5a2.62 2.62 0 0 0 0-3.7Zm-1.4 6.53a6 6 0 1 1-5.12-5.12l.85-.86A7.02 7.02 0 0 0 3 10a7 7 0 1 0 13.8-1.68l-.86.86Z"
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