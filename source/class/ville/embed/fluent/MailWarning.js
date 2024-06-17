/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailWarning",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m13.6 1.55-3.5 7A1 1 0 0 0 11 10h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 3.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM14.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-10-5h6.77l-.5 1H4.5C3.67 5 3 5.67 3 6.5v.3l7 4.12.17-.1a2 2 0 0 0 .84.18h.83l-1.59.93a.5.5 0 0 1-.42.04l-.08-.04L3 7.96v6.54c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V11h1v3.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4Z",
    FILLED : "m13.6 1.55-3.5 7A1 1 0 0 0 11 10h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 3.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM14.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm3.5 2h-6.16l-1.59.93a.5.5 0 0 1-.5 0L2 7.37v7.13A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5V11ZM9.22 8.1 11.27 4H4.5a2.5 2.5 0 0 0-2.48 2.22l7.98 4.7.17-.1a2 2 0 0 1-.95-2.72Z"
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