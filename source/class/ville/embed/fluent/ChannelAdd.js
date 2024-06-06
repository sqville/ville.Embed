/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChannelAdd",
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

   var pathdregular = "M3.5 4.5c-.1 0-.2 0-.3.02A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V5.5c0-.83-.67-1.5-1.5-1.5h-9c-.51 0-.97.26-1.24.65a2 2 0 0 0-.76-.15ZM9.2 16c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5V8.44a2 2 0 0 0 1 0v6.06c0 .83.67 1.5 1.5 1.5h3.7Zm.4-4c.18-.36.4-.7.66-1H7.5a.5.5 0 0 0 0 1h2.1ZM3.5 5.5a1 1 0 0 0-1 1 1 1 0 1 0 1-1Zm4 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z";
   var pathdfilled = "M5.5 3a2.5 2.5 0 0 0-2.3 1.52l.3-.02A2 2 0 1 1 3 8.44v6.06A2.5 2.5 0 0 0 5.5 17h4.1a5.48 5.48 0 0 1 0-5H7.5a.5.5 0 0 1 0-1h2.76A5.49 5.49 0 0 1 17 9.6V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-3.5-3a1 1 0 0 0-1 1 1 1 0 1 0 1-1Zm15.5 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z";
   
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