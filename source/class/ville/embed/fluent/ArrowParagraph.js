/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowParagraph",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12.15 10.85a.5.5 0 0 0 .7-.7L10.71 8h4.79A2.5 2.5 0 0 0 18 5.5v-3s0-.5-.5-.5-.5.5-.5.5v3c0 .83-.67 1.5-1.5 1.5h-4.8l2.15-2.15a.5.5 0 0 0-.7-.7l-3 3a.5.5 0 0 0 0 .7l3 3Zm-4.3-1.7a.5.5 0 1 0-.7.7L9.29 12H2.5s-.5 0-.5.5.5.5.5.5h6.8l-2.15 2.15a.5.5 0 0 0 .7.7l3-3a.5.5 0 0 0 0-.7l-3-3Z",
    FILLED : "M17.25 2c.41 0 .75.34.75.75v2.5A2.75 2.75 0 0 1 15.25 8h-3.8l1.36 1.5a.75.75 0 0 1-1.12 1L9.2 7.75a.75.75 0 0 1 0-1L11.7 4a.75.75 0 0 1 1.12 1l-1.36 1.5h3.8c.69 0 1.25-.56 1.25-1.25v-2.5c0-.41.34-.75.75-.75ZM8.3 9.5a.75.75 0 1 0-1.1 1L8.55 12h-5.8a.75.75 0 0 0 0 1.5h5.8L7.2 15a.75.75 0 0 0 1.1 1l2.5-2.75a.75.75 0 0 0 0-1L8.3 9.5Z"
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