/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CameraOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.5 4.2 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-.95-.95c-.22.07-.46.1-.7.1h-11A2.5 2.5 0 0 1 2 14.5v-8c0-1.02.62-1.9 1.5-2.3ZM15.3 16l-2.85-2.84a4 4 0 0 1-5.61-5.61L4.31 5c-.74.1-1.3.73-1.3 1.49v8c0 .83.67 1.5 1.5 1.5h10.78Zm-3.56-3.55L7.55 8.26a3 3 0 0 0 4.18 4.18Zm-3.3-6.13.78.78a3 3 0 0 1 3.68 3.68l.78.78A3.99 3.99 0 0 0 10 6c-.55 0-1.08.11-1.56.32ZM17 14.5c0 .12 0 .23-.03.34l.77.78c.17-.34.26-.72.26-1.12v-8A2.5 2.5 0 0 0 15.5 4h-1.69l-.58-1.17A1.5 1.5 0 0 0 11.89 2H8.12a1.5 1.5 0 0 0-1.34.83L6.2 4h-.07l.79.79a.5.5 0 0 0 .04-.07l.73-1.44A.5.5 0 0 1 8.12 3h3.77c.19 0 .36.1.45.28l.72 1.44a.5.5 0 0 0 .45.28h2c.82 0 1.5.67 1.5 1.5v8Z",
    FILLED : "M3.5 4.2 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-.95-.95c-.22.07-.46.1-.7.1h-11A2.5 2.5 0 0 1 2 14.5v-8c0-1.02.62-1.9 1.5-2.3Zm8.95 8.96-.71-.71a3 3 0 0 1-4.18-4.18l-.72-.72a4 4 0 0 0 5.61 5.61ZM9.22 7.1l3.68 3.68A3 3 0 0 0 9.22 7.1ZM14 10c0 .55-.11 1.08-.32 1.56l4.06 4.06c.17-.34.26-.72.26-1.12v-8A2.5 2.5 0 0 0 15.5 4h-1.69l-.58-1.17A1.5 1.5 0 0 0 11.89 2H8.12a1.5 1.5 0 0 0-1.34.83L6.2 4h-.07l2.32 2.32A3.99 3.99 0 0 1 14 10Z"
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