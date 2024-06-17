/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Library",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 3.5C2 2.67 2.67 2 3.5 2h1C5.33 2 6 2.67 6 3.5v12.98c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V3.5ZM3.5 3a.5.5 0 0 0-.5.5v12.98c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5h-1Zm3.5.5C7 2.67 7.67 2 8.5 2h1c.83 0 1.5.67 1.5 1.5v12.98c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V3.5ZM8.5 3a.5.5 0 0 0-.5.5v12.98c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5h-1Zm7.22 3.16a1.5 1.5 0 0 0-1.87-1.1l-.75.2A1.5 1.5 0 0 0 12.04 7l2 9.8c.18.84 1.02 1.36 1.84 1.15l.99-.25c.79-.2 1.27-1 1.1-1.78l-2.25-9.76ZM14.12 6a.5.5 0 0 1 .62.37L17 16.14a.5.5 0 0 1-.37.6l-.98.25a.5.5 0 0 1-.61-.39l-2-9.8a.5.5 0 0 1 .35-.58l.74-.2Z",
    FILLED : "M3.5 2C2.67 2 2 2.67 2 3.5v12.98c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V3.5C6 2.67 5.33 2 4.5 2h-1Zm5 0C7.67 2 7 2.67 7 3.5v12.98c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1Zm7.22 4.16a1.5 1.5 0 0 0-1.87-1.1l-.75.2A1.5 1.5 0 0 0 12.04 7l2 9.8c.18.84 1.02 1.36 1.84 1.15l.99-.25c.79-.2 1.27-1 1.1-1.78l-2.25-9.76Z"
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