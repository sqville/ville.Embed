/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BinderTriangle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 4c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v1.9l-1 1.19V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1h.5a.5.5 0 0 1 0 1H4v3h.5a.5.5 0 0 1 0 1H4v3h.5a.5.5 0 0 1 0 1H4a1 1 0 0 0 1 1h2.2l-.85 1H5a2 2 0 0 1-2-2h-.5a.5.5 0 0 1 0-1H3V9h-.5a.5.5 0 0 1 0-1H3V5h-.5a.5.5 0 0 1 0-1H3Zm12 7.61c0-.23-.29-.34-.44-.16l-2.64 3.14a.25.25 0 0 0 .2.41h2.13c.41 0 .75-.33.75-.75v-2.64Zm3-6.86a.75.75 0 0 0-1.33-.48l-10.5 12.5A.75.75 0 0 0 6.76 18H16a2 2 0 0 0 2-2V4.75Zm-1 .69V16a1 1 0 0 1-1 1H7.29l9.7-11.56ZM6 6.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    FILLED : "M5 2a2 2 0 0 0-2 2h-.5a.5.5 0 0 0 0 1H3v3h-.5a.5.5 0 0 0 0 1H3v3h-.5a.5.5 0 0 0 0 1H3c0 1.1.9 2 2 2h1.35L14 5.9V4a2 2 0 0 0-2-2H5Zm1.5 4h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Zm10.17-1.73a.75.75 0 0 1 1.33.48V16a2 2 0 0 1-2 2H6.75a.75.75 0 0 1-.57-1.23l10.5-12.5ZM15 14.25v-2.64c0-.23-.29-.34-.44-.16l-2.64 3.14a.25.25 0 0 0 .2.41h2.13c.41 0 .75-.33.75-.75Z"
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