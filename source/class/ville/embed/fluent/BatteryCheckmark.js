/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BatteryCheckmark",
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

   var pathdregular = "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-2.7c.09-.34.15-.7.18-1.06h2.77c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24H4.5c-.65 0-1.4.5-1.5 1.13V8.6c-.36.18-.7.4-1 .66V7.5A2.5 2.5 0 0 1 4.5 5h9ZM10 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 14.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z";
   var pathdfilled = "M2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-2.7A5.5 5.5 0 0 0 2 9.26V7.5Zm8 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 14.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z";
   
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