/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextCaseLowercase",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.5 3.5c.28 0 .5.22.5.5v4.9c.53-.56 1.23-.9 2-.9 1.66 0 3 1.57 3 3.5S15.66 15 14 15c-.77 0-1.47-.34-2-.9v.4a.5.5 0 0 1-1 0V4c0-.28.22-.5.5-.5ZM14 14c.97 0 2-.97 2-2.5S14.97 9 14 9s-2 .97-2 2.5 1.03 2.5 2 2.5ZM5.9 8.69c-.5.02-.92.13-1.18.26a.5.5 0 1 1-.44-.9c.4-.2.98-.34 1.58-.36.6-.03 1.27.07 1.86.36C9 8.7 9 9.96 9 10.46v4.04a.5.5 0 0 1-1 0v-.41c-.91.66-2.01 1.1-3.13.8a2.36 2.36 0 0 1-.65-4.3c.72-.48 1.59-.61 2.38-.57.49.02.97.11 1.4.25-.02-.48-.12-1.02-.72-1.32-.4-.2-.9-.28-1.39-.26ZM8 11.33c-.4-.17-.92-.29-1.45-.32-.66-.03-1.3.09-1.77.4-1.12.75-.77 2.21.35 2.5.9.25 1.94-.24 2.87-1.12v-1.46Z",
    FILLED : "M11.75 3.25c.41 0 .75.34.75.75v4.66C13 8.24 13.6 8 14.25 8c1.66 0 3 1.57 3 3.5s-1.34 3.5-3 3.5c-.65 0-1.26-.24-1.75-.66v.16a.75.75 0 0 1-1.5 0V4c0-.41.33-.75.75-.75Zm2.5 10.25c.62 0 1.5-.67 1.5-2s-.88-2-1.5-2-1.5.67-1.5 2 .88 2 1.5 2Zm-8.6-4.56a2.8 2.8 0 0 0-1.07.23.75.75 0 0 1-.67-1.34 4.26 4.26 0 0 1 1.69-.4c.62-.02 1.34.08 1.98.4C9 8.54 9 9.95 9 10.46v4.04a.75.75 0 0 1-1.5.06c-.87.53-1.89.85-2.94.57a2.61 2.61 0 0 1-.73-4.75c.78-.52 1.7-.66 2.53-.61a6 6 0 0 1 1.1.16.97.97 0 0 0-.55-.76c-.35-.18-.8-.25-1.26-.23ZM7.5 11.5a4.5 4.5 0 0 0-1.22-.24c-.63-.03-1.2.09-1.62.36-.92.62-.64 1.8.28 2.06.75.2 1.67-.19 2.56-1V11.5Z"
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