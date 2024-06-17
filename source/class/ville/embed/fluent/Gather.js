/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Gather",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 15V5a2 2 0 0 0-2-2H2.5a.5.5 0 1 0 0 1H4a1 1 0 0 1 1 1v2H2.5a.5.5 0 1 0 0 1H5v4H2.5a.5.5 0 0 0 0 1H5v2a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H4a2 2 0 0 0 2-2Zm11.85-4.15a.5.5 0 0 1-.35.15H15v2a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H16a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 0 1H16a1 1 0 0 0-1 1v2h2.5a.5.5 0 0 1 .35.85ZM10 11.5a.5.5 0 0 1 .15-.35l.64-.65H8a.5.5 0 0 1 0-1h2.8l-.65-.65a.5.5 0 1 1 .7-.7l1.5 1.5a.5.5 0 0 1 0 .7l-1.5 1.5a.5.5 0 0 1-.85-.35Z",
    FILLED : "M6 8v4H2V8h4Zm-3.85 8.85A.5.5 0 0 1 2 16.5V13h4v2a2 2 0 0 1-2 2H2.5a.5.5 0 0 1-.35-.15ZM2.5 3H4a2 2 0 0 1 2 2v2H2V3.5a.5.5 0 0 1 .5-.5ZM18 6.5V10h-4V8a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 .5.5Zm0 8V11h-4v2a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 .5-.5Zm-7.85-3.35a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H8a.5.5 0 1 0 0 1h2.8l-.65.65Z"
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