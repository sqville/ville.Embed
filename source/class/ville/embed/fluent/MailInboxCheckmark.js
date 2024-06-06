/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailInboxCheckmark",
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

   var pathdregular = "M18 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.85-1.85L12.5 6.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7ZM8.02 5H6a2 2 0 0 0-2 2v4h3.5c.28 0 .5.22.5.5v.01a1.64 1.64 0 0 0 .03.3c.04.2.1.46.23.72.13.25.3.49.57.66.26.18.63.31 1.17.31.54 0 .9-.13 1.17-.3.26-.18.44-.42.57-.67A2.57 2.57 0 0 0 12 11.5v-.01c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.2c-.08.32-.15.66-.18 1Zm-.97 7H4v3c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-3h-3.05c-.05.26-.14.62-.32.97a2.7 2.7 0 0 1-.9 1.06c-.45.29-1.02.47-1.73.47s-1.28-.18-1.72-.47a2.7 2.7 0 0 1-.91-1.06c-.18-.35-.27-.7-.32-.97Z";
   var pathdfilled = "M18 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.85-1.85L12.5 6.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7ZM16 10.4v.6h-3.5a.5.5 0 0 0-.5.5v.01a1.75 1.75 0 0 1-.03.3c-.04.2-.1.46-.23.72-.13.25-.3.49-.57.66-.26.18-.63.31-1.17.31-.54 0-.9-.13-1.17-.3a1.7 1.7 0 0 1-.57-.67A2.57 2.57 0 0 1 8 11.5v-.01a.5.5 0 0 0-.5-.5H4V7c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.74c-.3.26-.64.48-1 .66Z";
   
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