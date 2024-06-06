/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Sanitize",
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

   var pathdregular = "M5.94 3.47 3.47 5.94a1.5 1.5 0 0 0 0 2.12l2.97 2.96c-.25.24-.45.51-.6.82L2.77 8.77a2.5 2.5 0 0 1 0-3.54l2.46-2.46a2.5 2.5 0 0 1 3.54 0L11.3 5.3c-.3.17-.55.39-.76.65L8.06 3.47a1.5 1.5 0 0 0-2.12 0ZM15.9 7c-.2-.58-.76-1-1.41-1h-2c-.65 0-1.2.42-1.41 1H11a2 2 0 0 0-2 2v2.31a2.77 2.77 0 0 0-.56-.06c-.36 0-.77.08-1.13.35-.37.27-.65.69-.8 1.28a.5.5 0 0 0 .3.58c1.9.81 3 2.1 3.61 3.03A3.1 3.1 0 0 0 12.94 18h1.82A2.5 2.5 0 0 0 17 16.62l.63-1.26a3.5 3.5 0 0 0 .37-1.57V9a2 2 0 0 0-2-2h-.09ZM14 7h.5c.28 0 .5.22.5.5v4a.5.5 0 1 0 1 0V8a1 1 0 0 1 1 1v4.8c0 .38-.09.76-.26 1.1l-.63 1.27c-.26.5-.78.83-1.35.83h-1.82c-.64 0-1.27-.42-1.68-1.05a9.01 9.01 0 0 0-3.64-3.21.91.91 0 0 1 .28-.34.9.9 0 0 1 .54-.15 2 2 0 0 1 .83.2A.5.5 0 0 0 10 12V9a1 1 0 0 1 1-1v3.5a.5.5 0 1 0 1 0v-4c0-.28.22-.5.5-.5h.5v4.5a.5.5 0 1 0 1 0V7ZM3.5 12c.28 0 .5.22.5.5v.5h.5a.5.5 0 0 1 0 1H4v.5a.5.5 0 1 1-1 0V14h-.5a.5.5 0 1 1 0-1H3v-.5c0-.28.22-.5.5-.5ZM7 15.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1H6v.5a.5.5 0 1 0 1 0V17h.5a.5.5 0 1 0 0-1H7v-.5Z";
   var pathdfilled = "M2.77 5.23a2.5 2.5 0 0 0 0 3.54l3.46 3.46c.11.11.23.2.35.3.04-.13.1-.25.17-.36.4-.6.9-1.02 1.49-1.27.26-.1.51-.17.76-.2V7.5a1.5 1.5 0 0 1 2.05-1.4c.07-.25.2-.48.39-.66L8.77 2.77a2.5 2.5 0 0 0-3.54 0L2.77 5.23ZM12.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 1 1-1 0v-4a.5.5 0 0 0-1 0v4.25a2.08 2.08 0 0 0-1.38.08c-.38.16-.74.44-1.04.9a.5.5 0 0 0 .22.73 5.26 5.26 0 0 1 2.71 2.37c.55 1.03 1.6 2.17 2.99 2.17h.26A2.5 2.5 0 0 0 16 16.62l.63-1.26a3.5 3.5 0 0 0 .37-1.57V7.5a.5.5 0 0 0-1 0v4a.5.5 0 1 1-1 0v-5a.5.5 0 0 0-1 0v5a.5.5 0 1 1-1 0v-5a.5.5 0 0 0-.5-.5Zm-9 6c.28 0 .5.22.5.5v.5h.5a.5.5 0 0 1 0 1H4v.5a.5.5 0 1 1-1 0V14h-.5a.5.5 0 1 1 0-1H3v-.5c0-.28.22-.5.5-.5Zm3 3c.28 0 .5.22.5.5v.5h.5a.5.5 0 0 1 0 1H7v.5a.5.5 0 1 1-1 0V17h-.5a.5.5 0 1 1 0-1H6v-.5c0-.28.22-.5.5-.5Z";
   
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