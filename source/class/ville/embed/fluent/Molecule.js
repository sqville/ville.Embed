/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Molecule",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13 10a4 4 0 1 0-3.77-2.67L7.1 8.39a3.5 3.5 0 1 0 1.3 5.08l2.69 1.38a2.5 2.5 0 1 0 .44-.9l-2.7-1.38a3.5 3.5 0 0 0-.82-3.51l1.66-.84A4 4 0 0 0 13 10Zm0-1a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-7.5 5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    FILLED : "M17 6a4 4 0 0 1-7.33 2.22l-1.66.84a3.49 3.49 0 0 1 .82 3.5l2.7 1.4a2.5 2.5 0 1 1-.44.89l-2.7-1.38A3.5 3.5 0 1 1 7.1 8.39l2.13-1.06A4 4 0 1 1 17 6Z"
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