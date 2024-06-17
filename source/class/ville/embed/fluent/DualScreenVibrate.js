/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreenVibrate",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7 5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7ZM6 7a1 1 0 0 1 1-1h2.5v8H7a1 1 0 0 1-1-1V7Zm4.5 7V6H13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2.5Zm1-1.5c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5Zm-4-.5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1h-.5ZM1.88 6.51a.5.5 0 0 1 .6.37l.41 1.64c.1.35.05.71-.1 1.03l-.62 1.23a.5.5 0 0 0 0 .44l.78 1.56a.5.5 0 1 1-.9.44l-.77-1.55a1.5 1.5 0 0 1 0-1.34l.6-1.22a.5.5 0 0 0 .04-.35l-.4-1.64a.5.5 0 0 1 .36-.6Zm16.6.37a.5.5 0 0 0-.97.24l.41 1.64a.5.5 0 0 1-.03.35l-.61 1.22a1.5 1.5 0 0 0 0 1.34l.77 1.55a.5.5 0 1 0 .9-.44l-.78-1.56a.5.5 0 0 1 0-.44l.61-1.23c.16-.32.2-.68.11-1.03l-.4-1.64Z",
    FILLED : "M10.5 15H13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2.5v10Zm-1-10H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2.5V5Zm2.5 7.5c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5ZM7 12h.5a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1ZM1.88 6.51a.5.5 0 0 1 .6.37l.41 1.64c.1.35.05.71-.1 1.03l-.62 1.23a.5.5 0 0 0 0 .44l.78 1.56a.5.5 0 1 1-.9.44l-.77-1.55a1.5 1.5 0 0 1 0-1.34l.6-1.22a.5.5 0 0 0 .04-.35l-.4-1.64a.5.5 0 0 1 .36-.6Zm16.6.37a.5.5 0 0 0-.97.24l.41 1.64a.5.5 0 0 1-.03.35l-.61 1.22a1.5 1.5 0 0 0 0 1.34l.77 1.55a.5.5 0 1 0 .9-.44l-.78-1.56a.5.5 0 0 1 0-.44l.61-1.23c.16-.32.2-.68.11-1.03l-.4-1.64Z"
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