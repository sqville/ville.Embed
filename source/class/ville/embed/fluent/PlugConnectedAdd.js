/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PlugConnectedAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.96 2.3a.5.5 0 0 0-.82-.15l-2.7 2.7a4.04 4.04 0 0 0-5.33.33l-.6.61a1.05 1.05 0 0 0 0 1.49l2.76 2.76c.28-.2.58-.37.89-.52L9.52 6.88a.5.5 0 0 1 0-.7l.3-.3a3.03 3.03 0 0 1 4.29 0v.02a3.04 3.04 0 0 1 .73 3.11c.34.02.68.07 1 .16a4.03 4.03 0 0 0-.69-3.62l2.7-2.7a.5.5 0 0 0 .11-.54ZM7.28 8.5l2.77 2.77c-.2.28-.38.57-.53.88L6.9 9.52a.49.49 0 0 0-.7 0l-.3.3a3.04 3.04 0 0 0 0 4.29h.01a3.03 3.03 0 0 0 3.11.73c.02.35.07.68.15 1a4.03 4.03 0 0 1-3.6-.69l-2.7 2.7a.5.5 0 1 1-.71-.7l2.7-2.7a4.03 4.03 0 0 1 .33-5.34l.3-.3.31-.31a1.05 1.05 0 0 1 1.49 0ZM17 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z",
    FILLED : "M17.78 3.28a.75.75 0 0 0-1.06-1.06l-2.45 2.45a4.04 4.04 0 0 0-5.12.48l-.3.3a1.49 1.49 0 0 0 0 2.1l2.46 2.47a5.48 5.48 0 0 1 4.55-.85 4.04 4.04 0 0 0-.53-3.44l2.45-2.45ZM7.55 8.85l2.47 2.46a5.48 5.48 0 0 0-.85 4.55 4.04 4.04 0 0 1-3.44-.53l-2.45 2.45a.75.75 0 0 1-1.06-1.06l2.45-2.45a4.04 4.04 0 0 1 .48-5.12l.3-.3a1.49 1.49 0 0 1 2.1 0Zm9.45 9.4a4.5 4.5 0 1 1-5-7.5 4.5 4.5 0 0 1 5 7.5Zm-2.15-6.1a.5.5 0 0 0-.85.35V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.15-.35Z"
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