/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MountainLocationBottom",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.99 7.6 3.55 9.13A2 2 0 0 0 3 10.5V15a1 1 0 0 0 1 1h3.7c.2.35.41.7.62 1H4a2 2 0 0 1-2-2v-4.5a3 3 0 0 1 .82-2.07L8.2 2.78a2.5 2.5 0 0 1 3.62 0l5.37 5.65A3 3 0 0 1 18 10.5V15a2 2 0 0 1-2 2h-4.32c.2-.3.43-.65.63-1H16a1 1 0 0 0 1-1v-4.5a2 2 0 0 0-.55-1.38L14.43 7c-1.48-.19-2.55.3-3.68.8-.27.12-.53.24-.81.35-.72.3-1.49.53-2.37.47A5.18 5.18 0 0 1 5 7.6ZM8.9 3.48l-3.23 3.4c.77.5 1.4.7 1.96.75.66.05 1.26-.13 1.92-.4l.7-.3c.9-.4 1.93-.88 3.2-.95l-2.37-2.5a1.5 1.5 0 0 0-2.18 0Zm.35 13.13-.4-.6A4.79 4.79 0 0 1 8 14a2 2 0 1 1 4 0c0 .5-.41 1.29-.86 2l-.4.6a.9.9 0 0 1-1.48 0ZM11 14a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    FILLED : "M8.19 2.78a2.5 2.5 0 0 1 3.62 0l5.37 5.65A3 3 0 0 1 18 10.5V15a2 2 0 0 1-2 2h-4.32c.27-.4.56-.85.8-1.3.24-.47.52-1.1.52-1.7a3 3 0 1 0-6 0c0 .6.28 1.23.53 1.7.23.45.52.9.79 1.3H4a2 2 0 0 1-2-2v-4.5a3 3 0 0 1 .82-2.07L8.2 2.78Zm2.9.7a1.5 1.5 0 0 0-2.18 0l-3.23 3.4c.77.5 1.4.7 1.96.74.66.04 1.26-.13 1.92-.4l.7-.3c.9-.4 1.93-.88 3.2-.95l-2.37-2.5Zm-2.7 11.7c.25.49.57 1 .87 1.42a.9.9 0 0 0 1.48 0c.3-.42.62-.93.87-1.41.23-.45.39-.88.39-1.19a2 2 0 1 0-4 0c0 .31.16.74.4 1.19Zm2.37-.53a1 1 0 1 1-1.52-1.3 1 1 0 0 1 1.52 1.3Z"
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