/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WeatherSnowShowerNight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.5 17a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15H6.87A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 14 6.82 14h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 7ZM5.84 2a4.24 4.24 0 0 1 3.88 3.14c-.39.08-.74.2-1.08.36A3.05 3.05 0 0 0 7 3.38c-.19-.1-.34-.18-.54-.25a5.87 5.87 0 0 1-.62 3.44 5 5 0 0 1-2.56 1.9c.14.12.3.23.45.34.31.2.62.35.92.46-.33.22-.63.5-.88.8l-.28-.14A4.24 4.24 0 0 1 2.1 8.66a.63.63 0 0 1 .3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78Z",
    FILLED : "M9.5 17a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15H6.87A2.82 2.82 0 0 1 4 12.24c0-1.47 1.2-2.67 2.7-2.76h.23C7.13 7.55 8.53 6 11 6ZM5.84 2a4.24 4.24 0 0 1 3.88 3.14 4.56 4.56 0 0 0-3.47 3.14l-.07.22-.04.19-.17.03c-.89.18-1.66.67-2.2 1.36l-.28-.15A4.24 4.24 0 0 1 2.1 8.66a.63.63 0 0 1 .3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78Z"
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