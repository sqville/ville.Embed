/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnLeftRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16 14.57a.5.5 0 0 1-.31.4l-5 2a.5.5 0 0 1-.38-.93l3.84-1.54L2.63 9.91a1 1 0 0 1-.03-1.85l11.7-5.02a.5.5 0 0 1 .4.92L3 8.98l11.47 4.57-1.92-3.83a.5.5 0 0 1 .9-.44l2.49 4.98c.05.1.07.2.06.3Z",
    FILLED : "M15.53 15.45a.75.75 0 0 0 .4-1.03l-2.5-5a.75.75 0 1 0-1.35.67l1.62 3.24L3.88 9l10.67-4.57a.75.75 0 1 0-.6-1.38L2.77 7.86a1.25 1.25 0 0 0 0 2.29l10.46 4.6-3.25 1.3a.75.75 0 1 0 .56 1.4l5-2Z"
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