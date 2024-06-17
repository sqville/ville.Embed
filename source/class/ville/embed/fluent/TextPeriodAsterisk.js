/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextPeriodAsterisk",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12 4.5a.5.5 0 0 0-1 0v2.46L8.65 6.2a.5.5 0 0 0-.3.95l2.34.76-1.45 2a.5.5 0 1 0 .8.59l1.46-2 1.45 2a.5.5 0 0 0 .8-.59l-1.44-2 2.34-.76a.5.5 0 0 0-.3-.95L12 6.96V4.5ZM6 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    FILLED : "M12.25 4.75a.75.75 0 0 0-1.5 0v1.86l-1.77-.58a.75.75 0 1 0-.46 1.43l1.77.58-1.1 1.5a.75.75 0 0 0 1.22.88l1.09-1.5 1.09 1.5a.75.75 0 1 0 1.21-.88l-1.09-1.5 1.77-.58a.75.75 0 1 0-.46-1.43l-1.77.58V4.75ZM6.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
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