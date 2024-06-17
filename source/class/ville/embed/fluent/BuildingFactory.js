/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingFactory",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.44 2a1.5 1.5 0 0 0-1.5 1.4l-.87 13a1.5 1.5 0 0 0 1.5 1.6h2.86a1.5 1.5 0 0 0 1.5-1.6l-.87-13A1.5 1.5 0 0 0 5.56 2H4.44Zm-.5 1.47a.5.5 0 0 1 .5-.47h1.12c.27 0 .49.2.5.47l.87 13a.5.5 0 0 1-.5.53H3.57a.5.5 0 0 1-.5-.53l.87-13ZM16.5 18H8.43c.22-.3.38-.63.45-1H10v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h.5a.5.5 0 0 0 .5-.5V6.62l-4.17 3.75A.5.5 0 0 1 12 10V6.62L8.49 9.78 8.4 8.51l3.76-3.38a.5.5 0 0 1 .84.37v3.38l4.16-3.75a.5.5 0 0 1 .84.37v11c0 .83-.67 1.5-1.5 1.5ZM11 17h4v-4h-4v4Z",
    FILLED : "M2.94 3.4c.05-.79.7-1.4 1.5-1.4h1.12c.8 0 1.45.61 1.5 1.4l.87 13a1.5 1.5 0 0 1-1.5 1.6H3.57a1.5 1.5 0 0 1-1.5-1.6l.87-13ZM8.44 18c.34-.46.53-1.04.49-1.67L8.4 8.51l3.76-3.38a.5.5 0 0 1 .84.37v3.38l4.16-3.75a.5.5 0 0 1 .84.37v11c0 .83-.67 1.5-1.5 1.5H8.43ZM16 17v-4.2a.8.8 0 0 0-.8-.8h-3.4a.8.8 0 0 0-.8.8V17h5Z"
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