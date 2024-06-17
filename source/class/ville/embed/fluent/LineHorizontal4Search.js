/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LineHorizontal4Search",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12.5 10c1.06 0 2.04-.37 2.8-.98l3.85 3.83a.5.5 0 0 0 .7-.7L16.02 8.3A4.5 4.5 0 1 0 12.5 10Zm0-8a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm.02 9h3.36l1 1H2.5a.5.5 0 0 1 0-1h10.02ZM2.5 3h5.1c-.16.32-.3.65-.4 1H2.5a.5.5 0 0 1 0-1Zm5.1 5c-.16-.32-.3-.65-.4-1H2.5a.5.5 0 0 0 0 1h5.1ZM2 15.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z",
    FILLED : "M12.5 10c.97 0 1.87-.3 2.6-.83l3.62 3.61a.75.75 0 1 0 1.06-1.06l-3.61-3.61A4.5 4.5 0 1 0 12.5 10Zm0-7.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm3.03 8.5 1.5 1.5H2.75a.75.75 0 0 1 0-1.5h12.78ZM2.75 3H7.6c-.24.47-.41.97-.5 1.5H2.74a.75.75 0 0 1 0-1.5Zm0 4h4.46c.15.54.38 1.04.68 1.5H2.75a.75.75 0 0 1 0-1.5ZM2 15.75c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
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