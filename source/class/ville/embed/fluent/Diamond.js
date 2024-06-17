/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Diamond",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.59 11.41a2 2 0 0 1 0-2.82l6-6a2 2 0 0 1 2.83 0l6 6a2 2 0 0 1 0 2.82l-6 6a2 2 0 0 1-2.83 0l-6-6Zm.7-2.12a1 1 0 0 0 0 1.42l6 6a1 1 0 0 0 1.42 0l6-6a1 1 0 0 0 0-1.42l-6-6a1 1 0 0 0-1.42 0l-6 6Z",
    FILLED : "M2.59 11.41a2 2 0 0 1 0-2.82l6-6a2 2 0 0 1 2.83 0l6 6a2 2 0 0 1 0 2.82l-6 6a2 2 0 0 1-2.83 0l-6-6Z"
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