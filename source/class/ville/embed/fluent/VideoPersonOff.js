/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoPersonOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v9c0 .83.67 1.5 1.5 1.5h11.8l1.85 1.85a.5.5 0 0 0 .7-.7l-15-15ZM12.3 13l.71.7V15H7v-1.5c0-.28.22-.5.5-.5h4.8Zm-1-1H7.5c-.83 0-1.5.67-1.5 1.5V15H3.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h.8l3.22 3.22-.02.28a2.5 2.5 0 0 0 2.78 2.48L11.29 12ZM8.57 6.45l.73.72a1.5 1.5 0 0 1 2.03 2.03l.72.73a2.5 2.5 0 0 0-3.48-3.48ZM17 14.5c0 .1-.03.2-.1.29l.72.7c.24-.26.38-.6.38-.99v-9c0-.83-.67-1.5-1.5-1.5H6.12l1 1h9.38c.28 0 .5.22.5.5v9Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v9c0 .83.67 1.5 1.5 1.5h11.8l1.85 1.85a.5.5 0 0 0 .7-.7l-15-15ZM11.3 12H7.5c-.83 0-1.5.67-1.5 1.5V15H3.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h.8l3.22 3.22-.02.28a2.5 2.5 0 0 0 2.78 2.48L11.29 12ZM8.57 6.45l3.48 3.48a2.5 2.5 0 0 0-3.48-3.48ZM17 14.5c0 .1-.03.2-.1.29l.72.7c.24-.26.38-.6.38-.99v-9c0-.83-.67-1.5-1.5-1.5H6.12l1 1h9.38c.28 0 .5.22.5.5v9Z";
   
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