/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AttachArrowRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m4.83 10.48 5.65-5.65A3 3 0 0 1 14.79 9c.4.02.78.08 1.14.18a4 4 0 0 0-6.14-5.07L4.12 9.78a.5.5 0 0 0 .7.7ZM8 15.78l1-.99c.02.42.09.83.2 1.21l-.5.5a2.5 2.5 0 1 1-3.53-3.54l6.01-6.01a.5.5 0 1 1 .7.7l-6 6.02A1.5 1.5 0 0 0 8 15.79ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 1 0-.7.7L15.29 14H12.5a.5.5 0 1 0 0 1h2.8l-1.15 1.15a.5.5 0 1 0 .7.7l2-2Z",
    FILLED : "m5.28 10.6 5.3-5.3A2.75 2.75 0 0 1 14.65 9c.56.02 1.1.12 1.6.29a4.25 4.25 0 0 0-6.73-5.05l-5.3 5.3a.75.75 0 0 0 1.06 1.07Zm2.83 4.96.9-.9c.01.63.13 1.22.34 1.78l-.18.18a2.75 2.75 0 0 1-3.89-3.89l5.66-5.66A.75.75 0 1 1 12 8.13L6.34 13.8a1.25 1.25 0 0 0 1.77 1.77ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"
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