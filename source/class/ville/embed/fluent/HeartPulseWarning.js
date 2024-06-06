/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HeartPulseWarning",
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

   var pathdregular = "M12.71 9.1c.12-.23.28-.43.46-.6l-.3-.33a.5.5 0 0 0-.8.06l-1.98 3.18-2.13-5.1a.5.5 0 0 0-.92 0L5.47 10H2.5a.5.5 0 0 0 0 1h3.3a.5.5 0 0 0 .46-.3L7.5 7.79l2.04 4.9a.5.5 0 0 0 .88.08l2.15-3.43.02.02.12-.25ZM4.8 12l4.31 4.36.1-.26.36-.7-3.4-3.44a1.5 1.5 0 0 1-.37.04h-1Zm12.9-2.99c.61-1.57.29-3.42-.98-4.7a4.3 4.3 0 0 0-6.13-.01l-.6.6-.6-.61a4.3 4.3 0 0 0-6.13-.02 4.4 4.4 0 0 0-.94 4.74L2.5 9h.92a3.4 3.4 0 0 1 .55-4.02 3.3 3.3 0 0 1 4.7.01l.97.97c.2.2.51.2.7 0L11.3 5a3.3 3.3 0 0 1 4.71.02 3.41 3.41 0 0 1 .6 3.98h.89l.2.01Zm-4.1.54-3.5 7A1 1 0 0 0 11 18h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 11.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z";
   var pathdfilled = "M3.26 4.27a4.3 4.3 0 0 1 6.13.02l.6.61.6-.6a4.3 4.3 0 0 1 6.13.01 4.42 4.42 0 0 1 .98 4.7L17.5 9h-1.26a2 2 0 0 0-2.15-.96l-.46-.53a1.5 1.5 0 0 0-2.4.2l-.96 1.53-1.39-3.32a1.5 1.5 0 0 0-2.76 0L4.81 9H2.5l-.18.01a4.4 4.4 0 0 1 .94-4.74ZM9.22 16.1l1.06-2.13a1.5 1.5 0 0 1-1.66-.9l-1.13-2.7-.3.72A1.5 1.5 0 0 1 5.8 12h-1l4.31 4.36.1-.26Zm3.5-7c.11-.23.27-.43.45-.6l-.3-.33a.5.5 0 0 0-.8.06l-1.98 3.18-2.13-5.1a.5.5 0 0 0-.92 0L5.47 10H2.5a.5.5 0 0 0 0 1h3.3a.5.5 0 0 0 .46-.3L7.5 7.79l2.04 4.9a.5.5 0 0 0 .88.08l2.15-3.43.02.02.12-.25Zm.88.45-3.5 7A1 1 0 0 0 11 18h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 11.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z";
   
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