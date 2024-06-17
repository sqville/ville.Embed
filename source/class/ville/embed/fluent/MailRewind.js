/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailRewind",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16 8V6.8l2.36 1.97A1 1 0 0 0 20 8V3a1 1 0 0 0-1.64-.77L16 4.2V3a1 1 0 0 0-1.64-.77l-3 2.5a1 1 0 0 0 0 1.54l3 2.5A1 1 0 0 0 16 8Zm-2.28 1.54.27.19-3.74 2.2a.5.5 0 0 1-.42.04l-.08-.04L3 7.96v6.54c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8.94l.72.6.28.2v4.76a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h6.18c-.32.28-.52.63-.62 1H4.5C3.67 5 3 5.67 3 6.5v.3l7 4.12 3.15-1.86.57.48Z",
    FILLED : "M16 8V6.8l2.36 1.97A1 1 0 0 0 20 8V3a1 1 0 0 0-1.64-.77L16 4.2V3a1 1 0 0 0-1.64-.77l-3 2.5a1 1 0 0 0 0 1.54l3 2.5A1 1 0 0 0 16 8Zm.84.8a2 2 0 0 1-2.85.93l-3.74 2.2a.5.5 0 0 1-.5 0L2 7.37v7.13A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5V9.73c-.1-.05-.2-.12-.28-.2l-.88-.73ZM4.5 4h6.18a2 2 0 0 0 .04 3.04l2.43 2.02L10 10.92l-7.98-4.7A2.5 2.5 0 0 1 4.5 4Z"
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