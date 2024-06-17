/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GaugeAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.4 16.99a7 7 0 1 0-7.39-7.4c-.36.19-.7.4-1 .66L2 10a8 8 0 1 1 7.75 8c.25-.31.47-.65.66-1.01Zm2.07-11.93a.5.5 0 0 1-.65.28A5 5 0 0 0 5.1 9.01c-.36.03-.71.1-1.05.18a6 6 0 0 1 8.13-4.78c.26.1.39.39.29.65ZM8.67 10c.72.5 1.3 1.18 1.72 1.96.31-.06.61-.23.84-.5.07-.08.17-.23.27-.38l.38-.63a123.47 123.47 0 0 0 2.2-3.82l.12-.2a.5.5 0 0 0-.75-.63l-.18.14A335.17 335.17 0 0 0 9.3 9.2c-.14.12-.27.24-.34.33-.13.14-.22.3-.28.48Zm6.27-2.48a.5.5 0 0 1 .65.29 6 6 0 0 1-1.35 6.42.5.5 0 1 1-.7-.7 5 5 0 0 0 1.12-5.36.5.5 0 0 1 .28-.65ZM8 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5a.5.5 0 0 0-.15-.35Z",
    FILLED : "M10 18a8 8 0 1 0-8-7.75c.6-.48 1.3-.85 2.05-1.06a6 6 0 0 1 8.13-4.78.5.5 0 0 1-.36.93A5 5 0 0 0 5.1 9.01a5.58 5.58 0 0 1 3.57 1c.06-.17.15-.34.28-.48.07-.09.2-.2.34-.33l.56-.48a125.12 125.12 0 0 1 2.96-2.4l.27-.22.37-.3a.5.5 0 0 1 .75.64l-.11.2a323.59 323.59 0 0 1-.69 1.2l-.23.4-.3.53a184.46 184.46 0 0 1-1.48 2.48 4.28 4.28 0 0 1-.16.23 1.5 1.5 0 0 1-.84.5A5.48 5.48 0 0 1 9.75 18H10Zm5.6-10.18a6 6 0 0 1-1.36 6.42.5.5 0 1 1-.7-.7 5 5 0 0 0 1.12-5.36.5.5 0 0 1 .93-.36ZM8 18.24a4.5 4.5 0 1 1-5-7.48 4.5 4.5 0 0 1 5 7.48Zm-2.15-6.1a.5.5 0 0 0-.85.36V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5a.5.5 0 0 0-.15-.35Z"
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