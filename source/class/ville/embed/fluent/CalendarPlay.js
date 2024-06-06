/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarPlay",
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

   var pathdregular = "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.74-6.55c.1 0 .18.03.26.08l2.3 1.51c.07.05.12.1.16.18a.54.54 0 0 1-.03.54.46.46 0 0 1-.13.13l-2.3 1.57a.54.54 0 0 1-.12.06.45.45 0 0 1-.32-.02.57.57 0 0 1-.16-.1.5.5 0 0 1-.14-.36v-3.08a.51.51 0 0 1 .3-.46.44.44 0 0 1 .18-.05Z";
   var pathdfilled = "M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm0 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.74-6.55c.1 0 .18.03.26.08l2.3 1.51c.07.05.12.1.16.18a.54.54 0 0 1-.03.54.46.46 0 0 1-.13.13l-2.3 1.57a.54.54 0 0 1-.12.06.45.45 0 0 1-.32-.02.57.57 0 0 1-.16-.1.5.5 0 0 1-.14-.36v-3.08a.51.51 0 0 1 .3-.46.44.44 0 0 1 .18-.05Z";
   
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