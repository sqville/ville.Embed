/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonTag",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 6a4 4 0 1 1 6.65 3h-.14c-.8 0-1.52.38-1.98.96A4 4 0 0 1 5 6Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm.05 8H4.01A2 2 0 0 0 2 13c0 1.7.83 2.97 2.14 3.8A9.14 9.14 0 0 0 9 18c.8 0 1.58-.07 2.31-.22l-.85-.87c-.47.06-.95.09-1.46.09a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5v-.48c0-.18.02-.35.05-.52Zm.95 3.4c0 .39.15.77.43 1.05l3.04 3.1c.58.59 1.52.6 2.12.03l2.95-2.84c.6-.58.62-1.55.02-2.15l-3.1-3.14a1.5 1.5 0 0 0-1.08-.45h-2.87c-.83 0-1.51.68-1.51 1.51v2.88Zm2.75-.9a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z",
    FILLED : "M5 6a4 4 0 1 1 6.65 3h-.14c-.8 0-1.52.38-1.98.96A4 4 0 0 1 5 6Zm4.05 5H4.01A2 2 0 0 0 2 13c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.8 0 1.58-.07 2.31-.22l-1.6-1.63A2.52 2.52 0 0 1 9 14.4v-2.87c0-.18.02-.35.05-.52Zm.95 3.4c0 .39.15.77.43 1.05l3.04 3.1c.58.59 1.52.6 2.12.03l2.95-2.84c.6-.58.62-1.55.02-2.15l-3.1-3.14a1.5 1.5 0 0 0-1.08-.45h-2.87c-.83 0-1.51.68-1.51 1.51v2.88Zm2.75-.9a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
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