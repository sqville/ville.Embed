/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowMoveInward",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.15 16.35c.2.2.5.2.7 0l1.65-1.64v3.79a.5.5 0 0 0 1 0v-3.8l1.65 1.65a.5.5 0 0 0 .7-.7l-2.5-2.5a.5.5 0 0 0-.7 0l-2.5 2.5a.5.5 0 0 0 0 .7Zm9.2-8.5a.5.5 0 0 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7l-1.64-1.65h3.79a.5.5 0 0 0 0-1h-3.8l1.65-1.65Zm-12.7 0a.5.5 0 1 1 .7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 0 1-.7-.7l1.64-1.65H1.5a.5.5 0 0 1 0-1h3.8L3.64 7.85Zm4.2-4.2a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 0 0-.7-.7L10.5 5.29V1.5a.5.5 0 0 0-1 0v3.8L7.85 3.64Z",
    FILLED : "M13.03 3.72c.3.3.3.77 0 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.22 1.22V1.75a.75.75 0 0 1 1.5 0v3.19l1.22-1.22c.3-.3.77-.3 1.06 0ZM3.72 6.97c.3-.3.77-.3 1.06 0l2.5 2.5c.3.3.3.77 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H1.75a.75.75 0 0 1 0-1.5h3.19L3.72 8.03a.75.75 0 0 1 0-1.06Zm11.5 0a.75.75 0 1 1 1.06 1.06l-1.22 1.22h3.19a.75.75 0 0 1 0 1.5h-3.19l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5Zm-2.19 9.31c.3-.3.3-.77 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22v3.19a.75.75 0 0 0 1.5 0v-3.19l1.22 1.22c.3.3.77.3 1.06 0Z"
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