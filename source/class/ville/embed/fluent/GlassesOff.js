/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GlassesOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L4.89 5.6 2.36 8.52c-.22.27-.36.6-.36.98v3A2.5 2.5 0 0 0 4.5 15h2A2.5 2.5 0 0 0 9 12.5V11h1.3l.7.7v.8a2.5 2.5 0 0 0 2.5 2.5h.8l2.85 2.85a.5.5 0 0 0 .7-.7l-15-15ZM7.3 8H4.14L5.6 6.3 7.3 8ZM8 9.5v3c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 3 12.5v-3c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5Zm4 .38-.9-.9A1.5 1.5 0 0 1 12.5 8h3.36l-2.29-2.65a1 1 0 0 0-.76-.35H12a.5.5 0 0 1 0-1h.81a2 2 0 0 1 1.52.7l3.2 3.71c.29.28.47.66.47 1.09v3c0 .92-.5 1.72-1.23 2.15l-.74-.75c.57-.2.97-.76.97-1.4v-3a.5.5 0 0 0-.12-.33l-.06-.06A.5.5 0 0 0 16.5 9h-4a.5.5 0 0 0-.5.5v.38ZM7.12 5l-.8-.8a2 2 0 0 1 .87-.2H8a.5.5 0 0 1 0 1h-.81a1 1 0 0 0-.07 0Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7L4.89 5.6 2.36 8.52c-.22.27-.36.6-.36.98v3A2.5 2.5 0 0 0 4.5 15h2A2.5 2.5 0 0 0 9 12.5V11h1.3l.7.7v.8a2.5 2.5 0 0 0 2.5 2.5h.8l2.85 2.85a.5.5 0 0 0 .7-.7l-15-15ZM7.3 8H4.14L5.6 6.3 7.3 8Zm9.48 6.65L11.1 8.97A1.5 1.5 0 0 1 12.5 8h3.36l-2.29-2.65a1 1 0 0 0-.76-.35H12a.5.5 0 0 1 0-1h.81a2 2 0 0 1 1.52.7l3.2 3.71c.29.28.47.66.47 1.09v3c0 .92-.5 1.72-1.23 2.15ZM6.32 4.2l.8.8a1 1 0 0 1 .07 0H8a.5.5 0 0 0 0-1h-.81a2 2 0 0 0-.87.2Z";
   
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