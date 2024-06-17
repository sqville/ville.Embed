/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowCircleDownRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12.85 12.86a.5.5 0 0 1-.35.14h-5a.5.5 0 0 1 0-1h3.8L7.14 7.85a.5.5 0 1 1 .7-.7L12 11.29V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.14.35ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm7-8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
    FILLED : "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm2.85 10.86a.5.5 0 0 1-.35.14h-5a.5.5 0 0 1 0-1h3.8L7.14 7.85a.5.5 0 1 1 .7-.7L12 11.29V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.14.35Z"
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