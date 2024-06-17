/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TargetArrow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.96 5.3a.5.5 0 0 1-.1.55l-2 2a.5.5 0 0 1-.36.15h-2.8l-1.35 1.35a1.5 1.5 0 1 1-.7-.7L12 7.29V4.5a.5.5 0 0 1 .15-.35l2-2a.5.5 0 0 1 .85.35V5h2.5c.2 0 .38.12.46.3ZM16.3 6H14.5a.5.5 0 0 1-.5-.5V3.7l-1 1V7h2.3l1-1Zm1.32 1.52a8 8 0 1 1-5.12-5.13l-.81.81A7.02 7.02 0 0 0 3 10a7 7 0 1 0 13.8-1.68l.8-.8ZM14.9 9a5.02 5.02 0 0 1-4.9 6 5 5 0 1 1 1-9.9v1.03A4 4 0 1 0 13.87 9h1.03Z",
    FILLED : "M17.6 7.52a8 8 0 1 1-5.11-5.13l-1.05 1.05a1.5 1.5 0 0 0-.16.19 6.5 6.5 0 1 0 5.09 5.1l.2-.17 1.03-1.04ZM14.9 9a5.02 5.02 0 0 1-4.9 6 5 5 0 1 1 1-9.9v1.55A3.5 3.5 0 1 0 13.35 9h1.55ZM10 11.5a1.5 1.5 0 0 0 1.45-1.89l1.58-1.58a.74.74 0 0 0 .03-.03h2.44a.5.5 0 0 0 .35-.15l2-2A.5.5 0 0 0 17.5 5H15V2.5a.5.5 0 0 0-.85-.35l-2 2a.5.5 0 0 0-.15.35v2.44a.76.76 0 0 0-.03.03l-1.58 1.58a1.5 1.5 0 1 0-.4 2.95Z"
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