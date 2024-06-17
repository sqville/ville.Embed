/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HomeCheckmark",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.35 8.85a.5.5 0 0 0-.7-.7L9 11.78l-1.65-1.65a.5.5 0 1 0-.7.71l2 2c.2.2.5.2.7 0l4-4ZM11 2.38a1.5 1.5 0 0 0-2 0L3.5 7.33c-.32.28-.5.69-.5 1.11v7.06c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8.44c0-.42-.18-.83-.5-1.11L11 2.38Zm-1.33.75a.5.5 0 0 1 .66 0l5.5 4.94c.11.1.17.23.17.37v7.06a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V8.44a.5.5 0 0 1 .17-.37l5.5-4.94Z",
    FILLED : "M9 2.38a1.5 1.5 0 0 1 2 0l5.5 4.95c.32.28.5.69.5 1.11v7.06c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5V8.44c0-.42.18-.83.5-1.11L9 2.38Zm4.35 6.47a.5.5 0 0 0-.7-.7L9 11.78l-1.65-1.65a.5.5 0 1 0-.7.71l2 2c.2.2.5.2.7 0l4-4Z"
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