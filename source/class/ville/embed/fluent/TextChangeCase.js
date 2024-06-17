/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextChangeCase",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.5 3.5c.2 0 .39.14.46.34l3.65 10.5a.5.5 0 0 1-.95.32L15.74 12h-4.76l-1.01 2.68a.5.5 0 0 1-.93.01l.24-1.03 1-2.6V11h.01l2.73-7.18a.5.5 0 0 1 .47-.32Zm-.04 1.96L11.36 11h4.03l-1.93-5.54ZM4.9 8.7c-.48.02-.9.13-1.17.26a.5.5 0 0 1-.44-.9c.4-.2.98-.34 1.58-.36.6-.03 1.27.07 1.86.36C8 8.7 8 9.96 8 10.46v4.04a.5.5 0 0 1-1 0v-.41c-.91.66-2.01 1.1-3.13.8a2.36 2.36 0 0 1-.65-4.3c.72-.48 1.59-.61 2.38-.57.49.02.97.11 1.4.25-.02-.48-.12-1.02-.72-1.32-.4-.2-.9-.28-1.39-.26ZM7 11.33c-.4-.17-.92-.29-1.45-.32-.66-.03-1.3.09-1.77.4-1.12.75-.77 2.21.35 2.5.9.25 1.94-.24 2.87-1.12v-1.46Z",
    FILLED : "M13.5 3.25c.3 0 .59.2.7.5l3.64 10.5a.75.75 0 0 1-1.41.5l-.78-2.25h-4.59l-.86 2.27a.75.75 0 1 1-1.4-.54l3.98-10.5c.11-.3.4-.48.71-.48ZM11.62 11h3.5l-1.68-4.8-1.82 4.8ZM4.9 8.94a2.8 2.8 0 0 0-1.07.23.75.75 0 0 1-.67-1.34 4.26 4.26 0 0 1 1.69-.4c.62-.02 1.34.08 1.98.4 1.42.71 1.42 2.12 1.42 2.63v4.04a.75.75 0 0 1-1.5.06c-.87.53-1.89.85-2.94.57a2.61 2.61 0 0 1-.73-4.75c.78-.52 1.7-.66 2.53-.61a6 6 0 0 1 1.1.16.97.97 0 0 0-.55-.76c-.35-.18-.8-.25-1.26-.23Zm1.85 2.56a4.51 4.51 0 0 0-1.22-.24c-.63-.03-1.2.09-1.62.36-.92.62-.64 1.8.28 2.06.75.2 1.67-.19 2.56-1V11.5Z"
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