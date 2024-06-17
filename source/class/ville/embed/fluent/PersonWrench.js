/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonWrench",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm5.23 5H5A2 2 0 0 0 3 13c0 1.7.83 2.97 2.13 3.8.82.51 1.8.86 2.9 1.04-.05-.33-.03-.67.06-1a6.71 6.71 0 0 1-2.42-.89A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h6c.03-.34.11-.67.23-1ZM10 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.9 6.02c.36.05.46.48.2.75l-.97.97a1.5 1.5 0 1 0 2.13 2.13l.97-.97c.27-.26.7-.16.75.2a3.51 3.51 0 0 1-4.68 3.73l-2.73 2.73a1.5 1.5 0 1 1-2.13-2.13l2.73-2.73a3.52 3.52 0 0 1 3.72-4.68Z",
    FILLED : "M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm5.23 5H5A2 2 0 0 0 3 13c0 1.7.83 2.97 2.13 3.8.82.51 1.8.86 2.9 1.04a2.5 2.5 0 0 1 .7-2.12l2.32-2.32c-.16-.8-.1-1.63.18-2.4Zm4.66-1.98c.37.05.47.48.21.75l-.97.97a1.5 1.5 0 1 0 2.13 2.13l.97-.97c.27-.26.7-.16.75.2a3.51 3.51 0 0 1-4.68 3.73l-2.73 2.73a1.5 1.5 0 1 1-2.13-2.13l2.73-2.73a3.52 3.52 0 0 1 3.72-4.68Z"
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