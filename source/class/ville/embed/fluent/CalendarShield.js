/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarShield",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h5.03a5.81 5.81 0 0 1-.7-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v1.23c.33.2.66.32 1 .38V5.5A2.5 2.5 0 0 0 14.5 3h-9Zm0 1h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4ZM17 9.62a4.06 4.06 0 0 1-1-.27 5.16 5.16 0 0 1-1.72-1.23.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77A5.5 5.5 0 0 0 11.01 16c.27.37.6.7.99 1 .52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V10a.4.4 0 0 0-.4-.33c-.2 0-.4-.02-.6-.05Z",
    FILLED : "M17 7v1.61c-.2-.04-.41-.1-.61-.18-.46-.2-.92-.52-1.38-1A1.39 1.39 0 0 0 14 7H17ZM3 7h11c-.36 0-.73.14-1 .43a3.5 3.5 0 0 1-2.6 1.24c-.81 0-1.4.67-1.4 1.41v2.8A6.49 6.49 0 0 0 10.53 17H5.5A2.5 2.5 0 0 1 3 14.5V7Zm11.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM16 9.35a4.06 4.06 0 0 0 1.6.32c.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 0 1-.26 0A6.66 6.66 0 0 1 12 17c-.39-.3-.72-.63-.99-1a5.5 5.5 0 0 1-1-3.15l-.01-.27v-2.5a.4.4 0 0 1 .4-.41 4.5 4.5 0 0 0 3.32-1.55.39.39 0 0 1 .56 0c.54.57 1.11.97 1.72 1.23Z"
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