/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CheckmarkUnderlineCircle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0 1a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.85-11.85c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7L9.5 9.79l3.65-3.64c.2-.2.5-.2.7 0ZM7 13.5c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z",
    FILLED : "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.85-11.85c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7L9.5 9.79l3.65-3.64c.2-.2.5-.2.7 0ZM7.5 13h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Z"
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