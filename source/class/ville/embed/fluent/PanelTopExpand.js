/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PanelTopExpand",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m10.5 11.17.87-1a.5.5 0 0 1 .76.66l-1.75 2a.5.5 0 0 1-.76 0l-1.75-2a.5.5 0 1 1 .76-.65l.87 1V7.5a.5.5 0 0 1 1 0v3.67ZM4 16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4Zm-1-2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-5.5V8H17V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h5.5v1H3v5Z",
    FILLED : "m10.5 11.17.87-1a.5.5 0 0 1 .76.66l-1.75 2a.5.5 0 0 1-.76 0l-1.75-2a.5.5 0 1 1 .76-.65l.87 1V7.5a.5.5 0 0 1 1 0v3.67ZM4 16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4Zm-1-2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-5.5V7.5a1.5 1.5 0 1 0-3 0V9H3v5Z"
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