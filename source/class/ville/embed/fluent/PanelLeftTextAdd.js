/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PanelLeftTextAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.59 7a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09ZM7 12.5a.5.5 0 0 1-.41.5H4.5a.5.5 0 0 1-.09-1H6.5c.28 0 .5.22.5.5ZM5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.2c-.08-.32-.15-.66-.18-1H9V4h6a2 2 0 0 1 2 2v3.6c.36.18.7.4 1 .66V6a3 3 0 0 0-3-3H5Zm0 1h3v11H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Zm14 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    FILLED : "M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4.26a5.5 5.5 0 0 0-1-.66V6a2 2 0 0 0-2-2H9v11h.02c.03.34.1.68.19 1H5a3 3 0 0 1-3-3V6Zm4.59 1a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09ZM7 12.5a.5.5 0 0 0-.5-.5H4.41a.5.5 0 0 0 .09 1h2.09a.5.5 0 0 0 .41-.5Zm12 2a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
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