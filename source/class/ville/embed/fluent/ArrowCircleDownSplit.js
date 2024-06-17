/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowCircleDownSplit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m8.8 12.41-1.45 1.44a.5.5 0 0 1-.7 0L5.2 12.41a.5.5 0 0 1 .7-.7l.59.58V8.5c0-.28.22-.5.5-.5h2.5V5.5a.5.5 0 0 1 1 0V8H13c.28 0 .5.22.5.5v3.8l.59-.6a.5.5 0 0 1 .7.71l-1.44 1.44a.5.5 0 0 1-.7 0l-1.44-1.44a.5.5 0 0 1 .7-.7l.59.58V9h-5v3.3l.59-.6a.5.5 0 1 1 .7.71ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm7-8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
    FILLED : "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-9.2 2.41a.5.5 0 1 0-.71-.7l-.59.58V9h5v3.3l-.59-.6a.5.5 0 0 0-.7.71l1.44 1.44c.2.2.5.2.7 0l1.44-1.44a.5.5 0 0 0-.7-.7l-.59.58V8.5A.5.5 0 0 0 13 8h-2.5V5.5a.5.5 0 0 0-1 0V8H7a.5.5 0 0 0-.5.5v3.8l-.59-.6a.5.5 0 0 0-.7.71l1.44 1.44c.2.2.5.2.7 0l1.44-1.44Z"
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