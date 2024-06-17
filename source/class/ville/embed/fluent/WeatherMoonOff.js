/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WeatherMoonOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7l6.6 6.61a9.1 9.1 0 0 1-.03.07c-.94 1.78-2.55 3.03-5.55 4.1a.6.6 0 0 0-.3.9 7.98 7.98 0 0 0 12.14 1.19l2.14 2.13a.5.5 0 0 0 .7-.7l-2.16-2.17-.71-.71-5.03-5.02-.77-.77-6.33-6.33Zm11.46 12.87a6.98 6.98 0 0 1-10.3-.63c2.73-1.05 4.44-2.33 5.48-4.2l4.82 4.83ZM12.94 3.96a6.98 6.98 0 0 1 2.6 9.46l.73.73.09-.15A7.98 7.98 0 0 0 9.88 2.04a.6.6 0 0 0-.61.73c.43 1.8.5 3.28.22 4.6l.83.83c.43-1.51.45-3.17.04-5.12.9.12 1.77.42 2.58.88Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7l6.6 6.61-.03.07c-.94 1.78-2.55 3.03-5.55 4.1a.6.6 0 0 0-.3.9 7.98 7.98 0 0 0 12.14 1.19l2.14 2.13a.5.5 0 0 0 .7-.7l-2.16-2.17-6.5-6.5-6.34-6.33ZM16.35 14l-.08.15-6.78-6.78c.27-1.32.21-2.8-.22-4.6a.6.6 0 0 1 .61-.73A7.98 7.98 0 0 1 16.36 14Z"
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