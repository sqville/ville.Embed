/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SearchShield",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12c-.58.48-1.27.85-2.02 1.06v-1.05a4.5 4.5 0 1 0-6-4.31c-.32.33-.63.58-.96.78A5.5 5.5 0 0 1 8.5 3ZM7 10.35a4.63 4.63 0 0 1-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0 0 3 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0C7.69 18.09 9 16.27 9 13.58V11a.4.4 0 0 0-.4-.33 4.23 4.23 0 0 1-1.6-.32Z",
    FILLED : "M8.5 3a5.5 5.5 0 0 1 4.38 8.82l4.15 4.15a.75.75 0 0 1-.98 1.13l-.08-.07-4.15-4.15c-.54.41-1.15.72-1.82.91V12.21a4 4 0 1 0-5.48-4.12c-.2.07-.37.18-.52.34-.32.33-.63.58-.96.78A5.5 5.5 0 0 1 8.5 3ZM7 10.35a4.63 4.63 0 0 1-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 0 0-.56 0 4.5 4.5 0 0 1-3.32 1.55.4.4 0 0 0-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0 0 3 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0C7.69 18.09 9 16.27 9 13.58V11a.4.4 0 0 0-.4-.33 4.23 4.23 0 0 1-1.6-.32Z"
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