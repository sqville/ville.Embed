/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WeatherSnow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 15a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM7 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 10.24 2.82 2.82 0 0 1 14.13 13H5.87A2.82 2.82 0 0 1 3 10.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 5.55 7.53 4 10 4Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S4.81 12 5.82 12h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 10 5Z",
    FILLED : "M8.5 15a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM7 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 10.24 2.82 2.82 0 0 1 14.13 13H5.87A2.82 2.82 0 0 1 3 10.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 5.55 7.53 4 10 4Z"
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