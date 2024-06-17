/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowCircleDownUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.35 13.85 9 12.21a.5.5 0 1 0-.7-.71l-.8.8V6.5a.5.5 0 0 0-1 0v5.8l-.8-.8a.5.5 0 1 0-.7.7l1.65 1.65c.2.2.5.2.7 0ZM15 7.8l-1.65-1.64a.5.5 0 0 0-.7 0L11 7.79a.5.5 0 1 0 .7.71l.8-.8v5.8a.5.5 0 1 0 1 0V7.7l.8.8a.5.5 0 1 0 .7-.7ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
    FILLED : "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1-5.8-1.65 1.65a.5.5 0 0 1-.7 0L5 12.21a.5.5 0 1 1 .7-.71l.8.8V6.5a.5.5 0 0 1 1 0v5.8l.8-.8a.5.5 0 1 1 .7.7Zm6-4.4a.5.5 0 0 1-.7.7l-.8-.8v5.8a.5.5 0 0 1-1 0V7.7l-.8.8a.5.5 0 1 1-.7-.7l1.65-1.65c.2-.2.5-.2.7 0L15 7.79Z"
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