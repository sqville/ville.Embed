/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ReadAloud",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12.06 2.26a.5.5 0 0 1 .68-.2A9.7 9.7 0 0 1 18 9.94a.5.5 0 0 1-1 .12 8.7 8.7 0 0 0-4.74-7.12.5.5 0 0 1-.2-.68Zm-3.6 2.05a.5.5 0 0 0-.92 0l-4.5 11a.5.5 0 1 0 .92.38l1.54-3.76V12h5v-.07l1.54 3.76a.5.5 0 1 0 .92-.38l-4.5-11ZM10.12 11H5.88L8 5.82 10.12 11Zm2.13-6.43a.5.5 0 0 0-.5.86 5.67 5.67 0 0 1 2.76 4.14.5.5 0 0 0 .98-.14 6.67 6.67 0 0 0-3.24-4.86Z",
    FILLED : "M11.84 2.14c.2-.36.66-.5 1.02-.3a9.94 9.94 0 0 1 5.39 8.08.75.75 0 1 1-1.5.16 8.45 8.45 0 0 0-4.6-6.92.75.75 0 0 1-.3-1.02ZM8.7 4.22a.75.75 0 0 0-1.38 0l-4.5 11a.75.75 0 0 0 1.38.56l1.45-3.53h4.72l1.45 3.53a.75.75 0 0 0 1.38-.56l-4.5-11Zm1.06 6.53h-3.5L8 6.48l1.75 4.27Zm2.62-6.4a.75.75 0 0 0-.74 1.3c1.52.87 2.4 2.4 2.63 3.96a.75.75 0 1 0 1.48-.22 6.92 6.92 0 0 0-3.37-5.04Z"
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