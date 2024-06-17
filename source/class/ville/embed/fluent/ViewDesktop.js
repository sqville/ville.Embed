/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ViewDesktop",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 5.5c0-.28.22-.5.5-.5h1c.27 0 .5.22.5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6ZM7.5 5a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-8Zm-5.54-.5c0-.83.67-1.5 1.5-1.5H16.4c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H12v2.01h1.5a.5.5 0 0 1 0 1h-7a.5.5 0 1 1 0-1H8V14H3.46a1.5 1.5 0 0 1-1.5-1.5v-8ZM9 14v2.01h2V14H9ZM3.46 4a.5.5 0 0 0-.5.5v8c0 .28.23.5.5.5H16.4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5H3.46Z",
    FILLED : "M1.96 4.5c0-.83.67-1.5 1.5-1.5H16.4c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H12v2.01h1.5a.5.5 0 0 1 0 1h-7a.5.5 0 1 1 0-1H8V14H3.46a1.5 1.5 0 0 1-1.5-1.5v-8ZM9 14v2.01h2V14H9ZM4 5.5v6c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3 0v6c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5Z"
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