/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowStepBack",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.85 3.15c.2.2.2.5 0 .7L4.71 7H10a8 8 0 0 1 6.94 4.04.5.5 0 1 1-.88.5A7 7 0 0 0 10 8H4.7l3.15 3.15a.5.5 0 0 1-.7.7L3.15 7.87a.5.5 0 0 1-.01-.72l4-4c.19-.2.5-.2.7 0ZM8 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
    FILLED : "M7.85 3.15c.2.2.2.5 0 .7L4.71 7H10a8 8 0 0 1 6.94 4.04.5.5 0 1 1-.88.5A7 7 0 0 0 10 8H4.7l3.15 3.15a.5.5 0 0 1-.7.7L3.15 7.87a.5.5 0 0 1-.01-.72l4-4c.19-.2.5-.2.7 0ZM12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
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