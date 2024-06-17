/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnDownUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.57 3a.5.5 0 0 1 .4.31l2 5a.5.5 0 1 1-.93.38L15.5 4.85l-4.59 11.52a1 1 0 0 1-1.85.03L4.04 4.7a.5.5 0 0 1 .92-.4L9.98 16l4.57-11.47-3.83 1.92a.5.5 0 1 1-.44-.9l4.98-2.49a.5.5 0 0 1 .3-.06Z",
    FILLED : "M16.45 3.47a.75.75 0 0 0-1.03-.4l-5 2.5a.75.75 0 1 0 .67 1.35l3.24-1.62L10 15.12 5.44 4.45a.75.75 0 0 0-1.38.6l4.8 11.19c.43 1 1.85 1 2.29 0l4.6-10.46 1.3 3.25a.75.75 0 1 0 1.4-.56l-2-5Z"
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