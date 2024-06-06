/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LeafTwo",
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

   var pathdregular = "M2 4.32V8a5 5 0 0 0 5.58 4.97c.2.37.42.73.7 1.05l-2.14 2.14a.5.5 0 0 0 .7.7l2.14-2.13A5.5 5.5 0 0 0 18 10.5V6.4c0-.77-.63-1.4-1.4-1.4h-4.1c-.47 0-.94.06-1.38.17A5 5 0 0 0 7 3H3.32C2.59 3 2 3.59 2 4.32Zm7.7 9.7 3.15-3.17a.5.5 0 0 0-.7-.7L8.98 13.3A4.5 4.5 0 0 1 12.5 6l4.1-.01c.22 0 .4.18.4.4v4.1a4.5 4.5 0 0 1-7.3 3.52ZM7 4a4 4 0 0 1 3.15 1.53 5.52 5.52 0 0 0-2.51 2.4L5.85 6.15a.5.5 0 1 0-.7.7l2.08 2.08A5.5 5.5 0 0 0 7.2 12 4 4 0 0 1 3 8V4.32c0-.18.14-.32.32-.32H7Z";
   var pathdfilled = "M3.32 3C2.59 3 2 3.59 2 4.32V8a5 5 0 0 0 4.49 4.97 6.48 6.48 0 0 1-.05-4.82l-1.3-1.3a.5.5 0 1 1 .71-.7L6.9 7.19a6.52 6.52 0 0 1 3.51-2.85A4.98 4.98 0 0 0 7 3H3.32Zm4.95 11.02-2.13 2.14a.5.5 0 1 0 .7.7l2.14-2.13A5.5 5.5 0 0 0 18 10.5V6.4c0-.77-.63-1.4-1.4-1.4h-4.1a5.5 5.5 0 0 0-4.23 9.02Zm4.58-3.17L9.7 14.02c-.26-.21-.5-.45-.7-.71l3.16-3.16a.5.5 0 0 1 .7.7Z";
   
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