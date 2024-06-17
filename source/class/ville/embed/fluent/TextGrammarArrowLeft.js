/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextGrammarArrowLeft",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm7.24 3c.26.3.48.64.66 1h7.1a.5.5 0 0 0 0-1H9.74ZM11 14.5c0 .17 0 .34-.02.5h6.52a.5.5 0 0 0 0-1h-6.52l.02.5Zm-1 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.15-2.35a.5.5 0 0 0-.7.7L6.29 14H3.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2A.5.5 0 0 0 8 14.5a.5.5 0 0 0-.14-.35l-2-2Z",
    FILLED : "M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3a.75.75 0 0 0 0 1.5h.46a5.48 5.48 0 0 1 4.58 0h9.46a.75.75 0 0 0 0-1.5H2.75Zm14.5 7.5h-6.34a5.53 5.53 0 0 0 .07-1.5h6.27a.75.75 0 0 1 0 1.5Zm0-3h-6.62a5.5 5.5 0 0 0-.89-1.5h7.51a.75.75 0 0 1 0 1.5Zm-7.25 2a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.15-2.35a.5.5 0 0 0-.7.7L6.29 14H3.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2A.5.5 0 0 0 8 14.5a.5.5 0 0 0-.14-.35l-2-2Z"
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