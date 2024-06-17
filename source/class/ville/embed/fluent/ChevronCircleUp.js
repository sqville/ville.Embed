/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChevronCircleUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0Zm7 8a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-3.15-6.15a.5.5 0 0 1-.7-.7l3.5-3.5a.5.5 0 0 1 .7 0l3.5 3.5a.5.5 0 0 1-.7.7L10 8.71l-3.15 3.14Z",
    FILLED : "M2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm4.85 1.85a.5.5 0 0 1-.7-.7l3.5-3.5a.5.5 0 0 1 .7 0l3.5 3.5a.5.5 0 0 1-.7.7L10 8.71l-3.15 3.14Z"
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