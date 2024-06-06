/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailReadMultiple",
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

   var pathdregular = "M9.26 2.07a.5.5 0 0 0-.52 0L2.7 5.78A1.5 1.5 0 0 0 2 7.06v5.44A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5V7.06c0-.52-.27-1-.71-1.28l-6.03-3.7ZM3.46 6.5 9 3.09l5.55 3.41L9 9.91 3.45 6.5ZM3 7.4l5.74 3.53c.16.1.36.1.52 0L15 7.39v5.11c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 3 12.5V7.4ZM6.5 17a2.5 2.5 0 0 1-2-1H14a3 3 0 0 0 3-3V7.06c0-.16-.02-.33-.05-.48l.34.2c.44.27.71.76.71 1.28V13a4 4 0 0 1-4 4H6.5Z";
   var pathdfilled = "M8.74 2.07a.5.5 0 0 1 .52 0l6.03 3.71.2.14-6.49 4-6.48-4c.06-.05.12-.1.2-.14l6.02-3.7Zm7.24 4.72.02.27v5.44a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5V7.06c0-.1 0-.18.02-.27l6.72 4.14c.16.1.36.1.52 0l6.72-4.14ZM4.5 16c.46.6 1.18 1 2 1H14a4 4 0 0 0 4-4V8.06c0-.52-.27-1-.71-1.28l-.34-.2c.03.15.05.32.05.48V13a3 3 0 0 1-3 3H4.5Z";
   
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