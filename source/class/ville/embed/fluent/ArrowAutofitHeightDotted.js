/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowAutofitHeightDotted",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.14 4.8 14.5 3.12l-1.64 1.7a.5.5 0 0 1-.72-.7l1.82-1.88c.3-.3.79-.3 1.08 0l1.82 1.88a.5.5 0 1 1-.72.7ZM5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4.5a.5.5 0 0 0 0-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4.5a.5.5 0 0 0 0-1H5Zm9.5 2c.28 0 .5.22.5.5V7a.5.5 0 1 1-1 0V5.5c0-.28.23-.5.5-.5Zm.5 8a.5.5 0 1 0-1 0v1.5a.5.5 0 0 0 1 0V13Zm-.5-4c.28 0 .5.22.5.5v1a.5.5 0 1 1-1 0v-1c0-.28.23-.5.5-.5Zm1.64 6.2-1.64 1.69-1.64-1.7a.5.5 0 1 0-.72.7l1.82 1.88c.3.3.79.3 1.08 0l1.82-1.88a.5.5 0 1 0-.72-.7Z",
    FILLED : "m15.71 5.23-1.46-1.51-1.46 1.51a.75.75 0 0 1-1.08-1.04l1.82-1.88a1 1 0 0 1 1.44 0l1.82 1.88a.75.75 0 0 1-1.08 1.04Zm0 9.54-1.46 1.51-1.46-1.51a.75.75 0 0 0-1.08 1.04l1.82 1.88a1 1 0 0 0 1.44 0l1.82-1.88a.75.75 0 0 0-1.08-1.04ZM14.25 12c.42 0 .75.34.75.75v.5a.75.75 0 1 1-1.5 0v-.5c0-.41.34-.75.75-.75Zm.75-1.75a.75.75 0 1 1-1.5 0v-.5a.75.75 0 0 1 1.5 0v.5ZM14.25 8c.42 0 .75-.34.75-.75v-.5a.75.75 0 1 0-1.5 0v.5c0 .41.34.75.75.75ZM5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4.25a.75.75 0 0 0 0-1.5H5a.5.5 0 0 1-.5-.5V5c0-.28.22-.5.5-.5h4.25a.75.75 0 0 0 0-1.5H5Z"
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