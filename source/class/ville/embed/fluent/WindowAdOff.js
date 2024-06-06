/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowAdOff",
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

   var pathdregular = "m2.85 2.15 15 15a.5.5 0 0 1-.7.7l-1.27-1.27c-.4.27-.87.42-1.38.42h-9A2.5 2.5 0 0 1 3 14.5v-9c0-.51.15-.98.41-1.38L2.15 2.85a.5.5 0 1 1 .7-.7Zm12.3 13.7L10 10.71v1.79a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5h1.8l-1-1H4v7.5c0 .83.67 1.5 1.5 1.5h9c.23 0 .45-.05.65-.15ZM5.29 6 4.14 4.85c-.09.2-.14.42-.14.65V6h1.3Zm3 3H6v3h3V9.7L8.3 9ZM16 6H8.13l1 1H16v6.88l.97.97c.02-.11.03-.23.03-.35v-9A2.5 2.5 0 0 0 14.5 3h-9c-.12 0-.24 0-.35.02l.97.98h8.38c.83 0 1.5.67 1.5 1.5V6Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7L3.4 4.12c-.26.4-.41.87-.41 1.38v9A2.5 2.5 0 0 0 5.5 17h9c.5 0 .98-.15 1.38-.42l1.27 1.27a.5.5 0 0 0 .7-.7l-15-15Zm12.3 13.7c-.2.1-.42.15-.65.15h-9A1.5 1.5 0 0 1 4 14.5V7h2.3l1 1H5.5a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-1.8l5.15 5.15ZM8.29 9l.7.7V12H6V9h2.3ZM16 7v6.87l.98.98c.02-.11.03-.23.03-.35v-9A2.5 2.5 0 0 0 14.5 3h-9c-.12 0-.24 0-.35.02L9.12 7H16Z";
   
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