/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowBidirectionalUpDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.35 7.35a.5.5 0 1 1-.7-.7l3.5-3.5c.2-.2.5-.2.7 0l3.5 3.5a.5.5 0 0 1-.7.7L10 4.71v10.58l2.65-2.64a.5.5 0 0 1 .7.7l-3.5 3.5a.5.5 0 0 1-.7 0l-3.5-3.5a.5.5 0 0 1 .7-.7L9 15.29V4.71L6.35 7.35Z",
    FILLED : "M6.78 7.78a.75.75 0 0 1-1.06-1.06l3.5-3.5c.3-.3.77-.3 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L10.5 5.56v8.88l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5c-.3.3-.77.3-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L9 14.44V5.56L6.78 7.78Z"
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