/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WeatherThunderstorm",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m9.13 14.17 1.77-2a.5.5 0 0 1 .8.6l-.06.07L10.62 14h1.88c.4 0 .62.42.44.75l-.05.06-2.44 3a.5.5 0 0 1-.84-.54l.05-.08 1.8-2.19H9.5a.5.5 0 0 1-.42-.76l.05-.07 1.77-2-1.77 2ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15h-1.26a1.07 1.07 0 0 0 .01-1h1.3c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 7a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 14 6.82 14h1.3a1.07 1.07 0 0 0 0 1H6.88A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6ZM8.4 3c1.45 0 2.72.83 3.34 2.04a6.05 6.05 0 0 0-1.28-.02 2.65 2.65 0 0 0-4.7 1.2l-.04.22a1 1 0 0 1-.99.82h-.26c-.81 0-1.47.67-1.47 1.5 0 .57.31 1.06.78 1.31-.22.28-.4.58-.52.9a2.62 2.62 0 0 1 1.2-4.85h.22A3.77 3.77 0 0 1 8.39 3Z",
    FILLED : "M11.61 12.13c.2.18.22.5.04.7L10.62 14h1.88a.5.5 0 0 1 .4.81l-2.46 3a.5.5 0 0 1-.78-.62l1.8-2.19H9.5a.5.5 0 0 1-.37-.83l1.78-2a.5.5 0 0 1 .7-.04ZM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 12.24 2.82 2.82 0 0 1 15.13 15h-1.21a1.5 1.5 0 0 0-1.15-1.97l-.13-.02a1.5 1.5 0 0 0-2.56-1.4l-1.7 1.89c-.4.45-.47 1.02-.3 1.5h-1.2A2.82 2.82 0 0 1 4 12.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 7.57 8.53 6 11 6ZM8.4 3c1.45 0 2.72.83 3.34 2.04A6.05 6.05 0 0 0 11 5C8.6 5 6.87 6.3 6.25 8.29l-.07.21-.04.19-.17.03a3.73 3.73 0 0 0-2.71 2.26 2.62 2.62 0 0 1 1.2-4.86h.22A3.77 3.77 0 0 1 8.39 3Z"
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