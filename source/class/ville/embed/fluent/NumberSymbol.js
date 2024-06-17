/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberSymbol",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.99 2.6a.5.5 0 0 0-.98-.2L7.09 7H3.5a.5.5 0 1 0 0 1h3.39l-.8 4H2.5a.5.5 0 0 0 0 1h3.4L5 17.4a.5.5 0 1 0 .98.2l.92-4.6h5l-.9 4.4a.5.5 0 0 0 .98.2l.95-4.6h3.56a.5.5 0 0 0 0-1h-3.36l.82-4h3.54a.5.5 0 1 0 0-1h-3.33l.9-4.39a.5.5 0 1 0-.98-.2l-.95 4.6H8.11l.88-4.41ZM7.91 8h5.03l-.82 4h-5l.79-4Z",
    FILLED : "M8.99 2.88a.75.75 0 0 0-1.48-.26L6.84 6.5H3.75a.75.75 0 0 0 0 1.5h2.83l-.68 4H2.75a.75.75 0 0 0 0 1.5h2.89L5 17.12a.75.75 0 1 0 1.48.26l.67-3.88h4.48L11 17.12a.75.75 0 1 0 1.48.26l.67-3.88h3.1a.75.75 0 0 0 0-1.5h-2.84l.69-4h3.14a.75.75 0 1 0 0-1.5h-2.88l.62-3.62a.75.75 0 0 0-1.48-.26l-.67 3.88H8.37l.62-3.62ZM8.1 8h4.47l-.68 4H7.42l.69-4Z"
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