/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GlanceHorizontal",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 15.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 9 15.5v-3c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v3Zm-1.5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h5ZM11 7.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 7.5v-3C3 3.67 3.67 3 4.5 3h5c.83 0 1.5.67 1.5 1.5v3ZM9.5 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h5Zm6 1c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-1c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h1Zm.5-1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v3Zm-9 8c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 3 15.5v-3c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v3Zm-1.5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h1Z",
    FILLED : "M14.5 3h1c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 13 7.5v-3c0-.83.67-1.5 1.5-1.5Zm-10 0h5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 7.5v-3C3 3.67 3.67 3 4.5 3Zm0 8h1c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 3 15.5v-3c0-.83.67-1.5 1.5-1.5ZM9 12.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 9 15.5v-3Z"
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