/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Tent",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.4 2.82a.5.5 0 0 0-.77 0 20.89 20.89 0 0 1-4.91 3.9.5.5 0 0 0-.25.36L3.37 15H2.5a.5.5 0 0 0 0 1h3.94a.5.5 0 0 0 .1.01h6.9a.5.5 0 0 0 .1-.01h3.96a.5.5 0 0 0 0-1h-.84l-1.1-7.92a.5.5 0 0 0-.24-.36 20.89 20.89 0 0 1-4.92-3.9ZM13.7 15a19.92 19.92 0 0 1-3.22-7.2.5.5 0 0 0-.97 0c-.98 3.84-2.14 5.75-3.22 7.2H4.4l1.03-7.54c1.3-.76 3.3-2.2 4.6-3.57a23.15 23.15 0 0 0 4.6 3.57L15.64 15h-1.96Zm-1.22 0H7.52c.84-1.22 1.7-2.78 2.48-5.25.7 2.23 1.49 3.77 2.48 5.25Z",
    FILLED : "M10.4 2.82a.5.5 0 0 0-.77 0 20.89 20.89 0 0 1-4.91 3.9.5.5 0 0 0-.25.36L3.37 15H2.5a.5.5 0 0 0 0 1h3.94a.5.5 0 0 0 .1.01h6.9a.5.5 0 0 0 .1-.01h3.96a.5.5 0 0 0 0-1h-.84l-1.1-7.92a.5.5 0 0 0-.24-.36 20.89 20.89 0 0 1-4.92-3.9ZM7.51 15c.84-1.22 1.7-2.79 2.49-5.26.7 2.23 1.5 3.78 2.49 5.26H7.5Z"
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