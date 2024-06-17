/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TreeEvergreen",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.62 2.21a1 1 0 0 0-1.24 0l-3.3 2.61A1.5 1.5 0 0 0 6 7.14l-1.46 1.2a1.5 1.5 0 0 0 .51 2.6l-1.59 1.48A1.49 1.49 0 0 0 4.5 15H8v1.75c0 .69.57 1.25 1.26 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h3.5c1.35 0 2-1.66 1.02-2.58l-1.59-1.48a1.5 1.5 0 0 0 .52-2.6l-1.47-1.2a1.5 1.5 0 0 0-.05-2.32l-3.31-2.6ZM11 15v1.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 0 1-.25-.25V15h2ZM10 3l3.3 2.6a.5.5 0 0 1-.28.9.5.5 0 0 0-.3.88l2.09 1.73a.5.5 0 0 1-.32.89h-.76a.5.5 0 0 0-.34.86l2.45 2.3c.32.3.1.84-.34.84h-11a.49.49 0 0 1-.34-.85l2.44-2.29a.5.5 0 0 0-.34-.86H5.5a.5.5 0 0 1-.31-.89l2.1-1.73a.5.5 0 0 0-.3-.88.5.5 0 0 1-.3-.9L10 3Z",
    FILLED : "M10.62 2.21a1 1 0 0 0-1.24 0l-3.3 2.61A1.5 1.5 0 0 0 6 7.14l-1.46 1.2a1.5 1.5 0 0 0 .51 2.6l-1.59 1.48A1.49 1.49 0 0 0 4.5 15H8v1.75c0 .69.57 1.25 1.26 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h3.5c1.35 0 2-1.66 1.02-2.58l-1.59-1.48a1.5 1.5 0 0 0 .52-2.6l-1.47-1.2a1.5 1.5 0 0 0-.05-2.32l-3.31-2.6ZM9 15h2v1.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 0 1-.25-.25V15Z"
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