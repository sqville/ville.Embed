/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.OrganizationHorizontal",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 10a3 3 0 0 0 5.96.5H9.5v3c0 .83.67 1.5 1.5 1.5h1.04a3 3 0 1 0 0-1H11a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h1.04a3 3 0 1 0 0-1H11c-.83 0-1.5.67-1.5 1.5v3H7.96A3 3 0 0 0 2 10Zm3 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm10 4.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2-11a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z",
    FILLED : "M5 13a3 3 0 1 1 2.96-3.5H9.5v-3c0-.83.67-1.5 1.5-1.5h1.04a3 3 0 1 1 0 1H11a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h1.04a3 3 0 1 1 0 1H11a1.5 1.5 0 0 1-1.5-1.5v-3H7.96A3 3 0 0 1 5 13Z"
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