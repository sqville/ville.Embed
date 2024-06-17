/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Fps30",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12.5 2A2.5 2.5 0 0 0 10 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 12.5 2Zm0 7A1.5 1.5 0 0 1 11 7.5v-3a1.5 1.5 0 0 1 3 0v3c0 .83-.67 1.5-1.5 1.5Zm-9 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 0 1-1 0v-.01a.49.49 0 0 0-.49-.49h-.76a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 0 1 1 0v.01c0 .27.22.49.49.49h.76a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75ZM6.75 3h-.5c-.49 0-.91.28-1.12.69-.08.17-.24.31-.44.31-.36 0-.65-.32-.5-.65A2.25 2.25 0 0 1 6.25 2h.5a2.25 2.25 0 0 1 1.41 4 2.25 2.25 0 0 1-1.41 4h-.5c-.92 0-1.71-.55-2.06-1.35-.15-.33.14-.65.5-.65.2 0 .36.14.44.31.2.41.63.69 1.12.69h.5a1.25 1.25 0 0 0 0-2.5H6.5a.5.5 0 0 1 0-1h.25a1.25 1.25 0 0 0 0-2.5Z",
    FILLED : "M12.5 2A2.5 2.5 0 0 0 10 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 12.5 2Zm0 6.5a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1Zm-9 3.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 0 1-1 0v-.01a.49.49 0 0 0-.49-.49h-.76a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 0 1 1 0v.01c0 .27.22.49.49.49h.76a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75Zm-6.5-8.5c.63 0 1-.46 1-.88 0-.4-.37-.87-1-.87-.26 0-.48.08-.64.2-.2.15-.41.3-.65.3-.62 0-1.09-.58-.7-1.06A2.54 2.54 0 0 1 6.5 2C7.88 2 9 3.06 9 4.38a2.3 2.3 0 0 1-.66 1.6A2.37 2.37 0 0 1 6.62 10h-.25c-.78 0-1.47-.38-1.9-.96-.36-.48.1-1.04.7-1.04.25 0 .47.16.67.32.15.11.33.18.53.18h.25a.87.87 0 1 0 0-1.75H6.5a.75.75 0 0 1 0-1.5Z"
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