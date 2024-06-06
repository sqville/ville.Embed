/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailEdit",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M15.5 3A2.5 2.5 0 0 1 18 5.5v3.63c-.32-.1-.66-.14-1-.13V6.96l-6.75 3.97a.5.5 0 0 1-.42.04l-.08-.04L3 6.96v6.54c0 .83.67 1.5 1.5 1.5h5.48c-.22.3-.4.64-.5 1H4.5A2.5 2.5 0 0 1 2 13.5v-8A2.5 2.5 0 0 1 4.5 3h11Zm0 1h-11C3.67 4 3 4.67 3 5.5v.3l7 4.12 7-4.12v-.3c0-.83-.67-1.5-1.5-1.5Zm-4.52 11.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   var pathdfilled = "M18 6.37v2.76a2.87 2.87 0 0 0-2.9.71l-4.83 4.83a3.2 3.2 0 0 0-.8 1.33H4.5A2.5 2.5 0 0 1 2 13.5V6.37l7.75 4.56c.15.1.35.1.5 0L18 6.37ZM15.5 3a2.5 2.5 0 0 1 2.48 2.22L10 9.92l-7.98-4.7A2.5 2.5 0 0 1 4.5 3h11Zm-4.52 12.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});