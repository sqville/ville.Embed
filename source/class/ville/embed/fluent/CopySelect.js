/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CopySelect",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 3a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V4c0-1.1.9-2 2-2h.5a.5.5 0 0 1 0 1H8Zm-1 9a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H8a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0v.5Zm0-5.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3ZM16 3a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1h.5Zm0 10a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0v.5a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5Zm1.5-7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5Zm-7-4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM10 13.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4 6h1v1H4a1 1 0 0 0-1 1v6.5A2.5 2.5 0 0 0 5.5 17H12a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 14.5V8c0-1.1.9-2 2-2Z",
    FILLED : "M8 3a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V4c0-1.1.9-2 2-2h.5a.5.5 0 0 1 0 1H8Zm-1 9a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H8a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0v.5Zm0-5.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3ZM16 3a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1h.5Zm0 10a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0v.5a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5Zm1.5-7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5Zm-7-4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM10 13.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4 6h1v6.5A2.5 2.5 0 0 0 7.5 15H14v1a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 14.5V8c0-1.1.9-2 2-2Z"
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